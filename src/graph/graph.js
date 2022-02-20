import React from 'react'
import { Component } from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import './graph.css'


class Graph extends Component{
    
    
    render(){
        const number = this.props.number
        return(
            
            <>
            <div className='Graph'>
            <Link to="/UserPage">Вернуться на главную {number}</Link>
            </div>
            </>
        )
    }
}

export default Graph