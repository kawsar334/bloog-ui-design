import "./navbar.scss"

import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {

    const [active, setActive] = useState(false)

const scroll = ()=>{
            window.scrollY>0 ? setActive(true):setActive(false)
}

    useEffect(()=>{
        window.addEventListener("scroll",scroll );
        return ()=>{
            window.removeEventListener("scroll", scroll)
        };
    },[])
  return (
    <div className="navbar">
          <div className={active ? "navbarContainer active" :"navbarContainer"}>
            <Link to="/" className="logo">
                <img src="/logo.png" alt="" className="logoImg" />
            </Link>
            <div className="links">

            <Link to="/?cart=art" >
                <h6>ART</h6>
            </Link>
                  
                  <Link to="/?cart=Scince" >
                      <h6>SCINCE</h6>
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