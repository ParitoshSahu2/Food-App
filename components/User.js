import {useState} from "react";

const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count2]=useState(1);
    return(
        <div  className="user-card">
            <h1>Count={count}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:Indore</h3>
            <h4>Contact:paritoshsahu9826@gmail.com</h4>
        </div>
    );
};
export default User;