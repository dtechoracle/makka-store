import Navbar from "./Navbar/navbar";
import Search from "./Search/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Products from "./Products/products";
import cover from '../assets/cover.jpg';
import {Link } from "react-router-dom";
import Bottom from "./Bottom/Bottom";

const Layout = () => {
  var set = 32;
  return (
    <>
     <Navbar />
      <Search />
      <button onclick="buttonHandler()" title="Contact Sale"
        class="fixed z-90 bottom-10 right-8 bg-green-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300"><i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
      <img src={cover} alt="cover"/>
      <FontAwesomeIcon icon="coffee" />
      <Products />

      
      <Link to={`/Login?id=${set}`}>Blogs</Link>
      {/* <nav>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> */}
      <Bottom />
    </>
  )
};

export default Layout;