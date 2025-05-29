import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestraurantMenu";
import './index.css';

const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
    return(
        <div>
            <h1 className="bg-red-500">hello world!!</h1>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:< AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/contact",
            element:<Contact/>,    
        },
        {
            path: "/restaurants/:resId",
            element:<RestrauntMenu/>,    
        },
        {
            path: "/Grocery",
            element:(
            <Suspense fallback={<h1>Loading...</h1>}>
                <Grocery/>
                </Suspense>   
            ),
        }
    ],

        errorElement:<Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
