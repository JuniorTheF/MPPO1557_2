import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="welcomeText">Добро пожаловать в систему доступа к АКЭС</div>
      <div className="LoginContainer">
        <div className="Login">
          <input className="TextFieldLogin" placeholder="Login"></input>
        </div>
        <div className="Password">
          <input type="password" className="TextFieldPassword" placeholder="Password"></input>
        </div>
      </div>
      <button type="submit" class="Button">Войти</button>   
    </div>
  );
}
