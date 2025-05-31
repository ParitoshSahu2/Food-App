import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName, setBtnName]=useState("Login");
    console.log("Header Render");
    const onlineStatus=useOnlineStatus();
    
    return (
          <div className="flex justify-between  bg-pink-200 shadow-lg sm:bg-yellow-50 lg:bg-green-50" >
         <div>
         <img  className="w-56"
             src={LOGO_URL}/>               
         </div>
        

         <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    online Status:{onlineStatus?"🟢":"🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/">Cart</Link>
                </li>
                <li className="px-4">
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <button className="px-4"
                
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