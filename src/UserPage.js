import "./UserPage.css";
import Accessed from "./components/accessed"
import { Component } from "react";

class UserPage extends Component {
  render(){
    return (
    <div className="UserPage">
    <div className="welcomeText">Добро пожаловать, Username</div>
    <div className="numbers">
      <div className="numText">Доступные вам АКЭС</div>
      <Accessed key="-1" numbers={this.props.num}/>
    </div>
   </div>
   
  );
  }
}

export default UserPage
