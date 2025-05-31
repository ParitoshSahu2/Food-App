import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName, setBtnName]=useState("Login");
    console.log("Header Render");
    const onlineStatus=useOnlineStatus();
    
    return (
          <div className="flex justify-between" >
         <div>
         <img  className="w-56"
             src={LOGO_URL}/>               
         </div>
        

         <div>
            <ul className="flex p-4 m-4">
                <li>
                    online Status:{onlineStatus?"🟢":"🔴"}
                </li>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/">Cart</Link>
                </li>
                <li>
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <button 
                
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