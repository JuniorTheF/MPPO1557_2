import React from 'react'
import { Component } from "react";
import { Link } from 'react-router-dom'
import './graph.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



class Graph extends Component{
    
    
    render(){
        // const data = [{name: this.props.date, uv: 0.25, pv: 2400, amt: 2400},{name: 'Page A', uv: 0.5, pv: 2400, amt: 2400},{name: 'PA', uv: 0.75, pv: 2400, amt: 2400},{name: 'Page A', uv: 1, pv: 2400, amt: 2400},{name: 'Page A', uv: 1, pv: 2400, amt: 2400}];

        
        const data = this.props.data.map((data) => ({name: data.date.substr(11), uv: data.eff}))

        const pageWidth = document.documentElement.scrollWidth
        const pageHeight = document.documentElement.scrollHeight

        const handleClick = (number) => {
            counter = number
            console.log(counter)
        }   
        
        const number = this.props.number
        let counter = 0
        return(
            <div className='Graph'>
                <div>
            <Link to="/UserPage">Вернуться на главную {number}</Link>
            <div className='Buttons'>
            <button onClick={() => handleClick(1) }>Отобразить за день</button>
            <button onClick={() => handleClick(2) } style={{'marginTop': '2%'}}>Отобразить за неделю</button>
            </div>
            </div>
            <div className="Container">
            <LineChart width={pageWidth*0.8} height={pageHeight*0.6} data={data} margin={{ top: 10, right: 60, bottom: 10, left: 0 }} className='Plot' baseValue={1}>
            <Line type="monotone" dataKey="uv" stroke="#000000" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis domain={[0,1]} />
            </LineChart>
            </div>
            </div>
        )
    }
}

export default Graph