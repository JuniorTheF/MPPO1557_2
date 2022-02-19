import "./LoginPage.css";
import { Component } from "react";
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  render(){return (
    <div className="LoginPage">
      <div className="welcomeText">Добро пожаловать в систему доступа к АКЭС</div>
      <div className="LoginContainer">
        <div className="Login">
          <input className="TextFieldLogin" placeholder="Login" id="Login"></input>
        </div>
        <div className="Password">
          <input type="password" className="TextFieldPassword" placeholder="Password" id="Password"></input>
        </div>
      </div>
      <Link to="/UserPage" className="Button">
      <button type="submit" className="Bu">Войти</button>   
      </Link>
    </div>
  );
  }
}

export default LoginPage
