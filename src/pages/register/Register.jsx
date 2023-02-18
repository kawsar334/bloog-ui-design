import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
      <div className="auth">

          <h1 className="">Register</h1>
          <form action="">
              <input type="text" name="" id="" placeholder="username" />
              <input type="password" name="password" placeholder="Password" />
              <input type="email" name="" id=""  placeholder="Email"/>
              <button className="RegisterBtn">Register</button>
              <span>Don't you have an account? <Link to="/Login" >Login</Link> </span>
          </form>
      </div>
  )
}

export default Register