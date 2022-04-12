import { Link, useLocation } from 'react-router-dom'
import './graph.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import React, { useState } from 'react';



function Graph(){
        
    const [daily, setDaily] = useState(true);
    const [fetchData, setData] = useState("");
    const [count, setCount] = useState(false);
    const [parsedData, setParsedData] = useState([])
        const pageWidth = document.documentElement.scrollWidth
        const pageHeight = document.documentElement.scrollHeight

        const handleClick = (curr_state) => {
            setDaily(curr_state) 
        }   

        const deleteRepeating = (argu) => {
            let i = 0
            let newArr = []
            let retArr = []
            while (argu.length>i){
                if (newArr.indexOf(argu[i])===-1){
                newArr.push(argu[i])
                retArr.push(argu[i])
                }
                i++
            }
            return retArr
        }

        
        const {state} = useLocation()
        async function getData(login, password, id){
            await fetch(`http://localhost/getsensors/${id}`, {headers:{'login': login, 'pw':password}})
            .then(response => response.json())
            .then(data => {
            setData(data)
            setCount(true)
            })
            
        }
        const dailyChart = (dateArray) =>{
            let allowed = dateArray.map((entry) => {
                if (entry.off_reactive_a !== "NaN")
                    return entry
            }).filter( item => item )
            setParsedData(allowed)
        }

        const getPlotData = () =>{
            let preReturn = parsedData.map(unit => ({
                name: unit.start_date.split(" ")[1],
                uv: ((Number(unit.off_active_a) + Number(unit.off_active_b) + Number(unit.off_active_c))-(Number(unit.on_active_a) + Number(unit.on_active_b) + Number(unit.on_active_c)))/(Number(unit.off_active_a) + Number(unit.off_active_b) + Number(unit.off_active_c))
            }))
            return preReturn
        }

        const exists = (props) =>{
            if (props.length !== 0){
                return true
            }
        }

        const datePicker = (date) =>{
            let newArr = fetchData.map((item) => {
                if (item.start_date.split(' ')[0] == date)
                    return item
            })
            return newArr.filter( item => item )
        }

        let dailyDateList = 0
        if (!count){
            getData(state.login, state.password, state.id)
        }
        if (count){
            dailyDateList = fetchData.map(v => v.start_date.split(' ')[0])
            dailyDateList = deleteRepeating(dailyDateList)
            let secDiff = dailyDateList.map((num) => new Date(num.split('.').reverse().join('.')))
        return(
            <div className='Graph'>
            <div>
            <Link to={`/UserPage`}
                    state = {{ login: state.login, password: state.password, accessed: state.accessed }}>Вернуться на главную</Link>
            <div className='Buttons'>
            <button onClick={() => handleClick(true) }>Отобразить за день</button>
            <button onClick={() => handleClick(false) } style={{'marginTop': '2%'}}>Отобразить за неделю</button>
            </div>
            </div>
            {daily ? 
            <div>
                <div className="DateButtons">
                {dailyDateList.map((row) => <button onClick={() => dailyChart(datePicker(row))}>{row}</button>)}
                </div>
                <div className="Container">
                {exists(parsedData) ? 
                    <LineChart width={pageWidth*0.65} data={getPlotData()} height={pageHeight*0.6} margin={{ top: 10, right: 60, bottom: 10, left: 0 }} className='Plot' baseValue={1}>
                    <Line type="monotone" dataKey="uv" stroke="#000000" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0,1]} />
                    </LineChart> 
            : null}
                </div>
            </div> 
            : 
            <div>
                
            </div>}
            </div>
        )
        }
        else{
            return <>
            <div>Wait for it</div>
            </>
          }
}

export default Graph