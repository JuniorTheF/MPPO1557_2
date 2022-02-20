import React from 'react'
import { Component } from "react";
import LoginPage from './LoginPage'
import UserPage from './UserPage';
import { Routes, Route } from 'react-router-dom';
import Graph from './graph/graph'

class App extends Component{
  
  
  render(){
    const numbers = [/*{id: '1', data: [0.018, 0.25, 0.60, 0.13, 0.60]}*/
    {id: '100', data:  [{date :"28.02.2022 04:50:49", eff: 0.018}, 
    {date: "28.02.2022 05:50:49", eff: 0.25}, 
    {date: "28.02.2022 06:50:49", eff: 0.60}, 
    {date: "28.02.2022 07:50:49", eff: 0.13}, 
    {date: "28.02.2022 08:50:49", eff: 0.60}
  ]}, 
    /* {id: '200', data:  [0.018, 0.25, 0.60, 0.13, 0.60]}, 
     {id: '3000', data:  [0.018, 0.25, 0.60, 0.13, 0.60]}, 
     {id: '40', data:  [0.018, 0.25, 0.60, 0.13, 0.60]}, 
     {id: '5', data:  [0.018, 0.25, 0.60, 0.13, 0.60]}, 
     {id: '605', data:  [0.018, 0.25, 0.60, 0.13, 0.60]} */
  ]
  // const numbers = [{id : 1}]
      return (
        <>
          <Routes>
          <Route index element={<LoginPage />} />
          <Route exact path="/UserPage" element={<UserPage num={numbers.map((number) => number.id)}/>} />
          {numbers.map((number) => (
                <Route path={`/User/${number.id}`} element={<Graph number={number.id} data={number.data}/>} />
            ))}
          
          </Routes>
        </>
  )
  }

}

export default App;