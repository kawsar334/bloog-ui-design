import { Link } from "react-router-dom";
import "./login.scss" ;

const Login = () => {
  return (
    <div className="auth">

        <h1 className="">Login</h1>
        <form action="">
            <input type="text" name="" id="" placeholder="username" />
            <input type="password" name="password" placeholder="Password" />
            <button className="loginBtn">Login</button>
            <span>Don't you have an account? <Link  to="/register" >Register</Link> </span>
        </form>
    </div>
  )
}

export default Login