import { NavLink } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/Menu"
import Navbar from "../../components/navbar/Navbar"
import "./singlepage.scss"

const SinglePage = () => {
  return (
    <div className="singlepage">
        <Navbar />

<div className="singlepageWrapper">

    <div className="content">
                  <img src="https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Loading..." />

                  <div className="user">
                      <img src="https://images.pexels.com/photos/2395251/pexels-photo-2395251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                      <div className="info">
                          <span>kawsar </span>
                          <p>Posted 2 days </p>
                      </div>
                      <div className="edit">
                          <NavLink to={`/write?edit=`}><i class="fa-regular fa-pen-to-square"></i></NavLink>
                          <NavLink to={`/write?delete=`}><i class="fa-solid fa-trash"></i></NavLink>
                      </div>
                  </div>
                  <h1 > Lorem ipsum dolor sit amet. </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vitae error cumque illo dolore nam voluptatibus commodi voluptate, natus voluptates dicta praesentium. Accusamus reprehenderit dolorum harum omnis, exercitationem officiis dolore. ipsum dolor sit amet consectetur adipisicing elit. Nobis, vitae error cumque illo dolore nam voluptatibus commodi voluptate, natus voluptates dicta praesentium. Accusamus reprehenderit dolorum harum omnis, exercitationem officiis dolore ipsum dolor sit amet consectetur adipisicing elit. Nobis, vitae error cumque illo dolore nam voluptatibus commodi voluptate, natus voluptates dicta praesentium. Accusamus reprehenderit dolorum harum omnis, exercitationem officiis dolore ipsum dolor sit amet consectetur adipisicing elit. Nobis, vitae error cumque illo dolore nam voluptatibus commodi voluptate, natus voluptates dicta praesentium. Accusamus reprehenderit dolorum harum omnis, exercitationem officiis dolore ipsum dolor sit amet consectetur adipisicing elit. Nobis, vitae error cumque illo dolore nam voluptatibus commodi voluptate, natus voluptates dicta praesentium. Accusamus reprehenderit dolorum harum omnis, exercitationem officiis dolore</p>
    </div>
    <div className="menu">


        <Menu />
    </div>

</div>





        <Footer />

    </div>
  )
}

export default SinglePage