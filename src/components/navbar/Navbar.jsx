import "./navbar.scss"

import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <Link to="/" className="logo">
                <img src="/logo.png" alt="" className="logoImg" />
            </Link>
            <div className="links">

            <Link to="/?cart=art" >
                <h6>ART</h6>
            </Link>
                  <Link to="/?cart=technology" >
                      <h6>TECHNOLOGY</h6>
                  </Link>
                  <Link to="/?cart=Scince" >
                      <h6>SCINCE</h6>
                  </Link>
                  <Link to="/?cart=cinema" >
                      <h6>CINEMA</h6>
                  </Link>
                  <Link to="/?cart=design" >
                      <h6>DESIGN</h6>
                  </Link>
                  <Link to="/?cart=food" >
                      <h6>FOOD</h6>
                  </Link>
                  <Link to="/login">
                      <span ><b>LOGIN</b> </span>
                  </Link>
                  <Link to="/register">
                  <span><b>REGISTER</b></span>
                  </Link>
                  <span className="write">

                  <Link to="/post" >Write</Link>
                  </span>
            </div>

        </div>
    </div>
  )
}

export default Navbar