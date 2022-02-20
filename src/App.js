import React from 'react'
import { Component } from "react";
import LoginPage from './LoginPage'
import UserPage from './UserPage';
import { Link, Routes, Route } from 'react-router-dom';
import Graph from './graph/graph'

class App extends Component{
  
  
  render(){
    const numbers = [1, 100, 10000, 100000, 2000, 200000, 400]
      return (
        <>
          <Routes>
          <Route index element={<LoginPage />} />
          <Route exact path="/UserPage" element={<UserPage num={numbers}/>} />
          {numbers.map((number) => (
                <Route path={`/User/${number}`} element={<Graph number={number}/>} />
            ))}
          
          </Routes>
        </>
  )
  }

}

export default App;