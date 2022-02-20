import { Component } from "react";
import "./button.css"
import { Link } from 'react-router-dom'
class AccButton extends Component {
    render(){
        return(
            <>
                <Link to={`/User/${this.props.numbers}`}><button className="button">{this.props.numbers}</button></Link>
            </>
        )
    }
}

export default AccButton;