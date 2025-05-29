import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName, setBtnName]=useState("Login");
    console.log("Header Render");
    const onlineStatus=useOnlineStatus();
    
    return (
          <div className="header ">
         <div className="flex justify-between items-center">
         <img
            className="bg-red-500 w-12 rounded-full"    
            src={LOGO_URL}/>               
         </div>
        

         <div className="hidden sm:flex items-center space-x-6 text-gray-800 font-medium">
            <ul className="nav-items">
                <li className="px-4">
                    online Status:{onlineStatus?"online":"offline"}
                </li>
                <li className="hover:text-blue-700 px-4 ">
                    <Link to="/">HOME</Link>
                </li>
                <li  className="hover:text-blue-700 px-4 ">
                    <Link to="/about">About Us</Link>
                </li>
                <li  className="hover:text-blue-700 px-4 ">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li  className="hover:text-blue-700 px-4 ">
                    <Link to="/">Cart</Link>
                </li>
                <li  className="hover:text-blue-700 px-4 ">
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <button 
                className="Login"
                onClick={()=>{
                    btnName==="Login"
                     ?setBtnName("Logout")
                     : setBtnName("Login");
                }}
                >
                    {btnName}
                </button>
            </ul>
         </div>
        </div> 
    )
};

export default Header;