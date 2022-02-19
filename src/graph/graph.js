import React from 'react'
import { Component } from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";



class Graph extends Component{
    
    
    render(){

        return(
            
            <>
            <Link to="/UserPage">Вернуться на главную</Link>
            
            </>
        )
    }
}

export default Graph