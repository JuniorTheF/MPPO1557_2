import { Component } from "react";
import AccButton from "./accbutton"

class Accessed extends Component {
    render() {
        return (
            <>
            {this.props.numbers.map((number) => (
                <AccButton key={number^2} numbers={number}></AccButton>
            ))}
            </>
        );
    }
}



export default Accessed;