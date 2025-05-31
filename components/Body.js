import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant ]=useState([]);
  const [searchText,setSearchText]=useState("");
  //whenever state variables update,react triggers a reconciliation cyccle(re-renders the component).
  console.log("body rendered");
  
  //if no dependency array =>useEffect is called on every render
  //if dependency array is empyt =[]=> useEffect is called on intial render(just once)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Use Effect Called");
    

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6859407&lng=75.8636355&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    

    const json = await data.json();
    console.log(json);

    const allCards = json?.data?.cards || [];
    const restaurantCards = allCards.slice(3, 10);
    const restaurantsArray = restaurantCards.map(
      (card) => card?.card?.card?.info
    );
    
  
    setListOfRestaurants(restaurantsArray);
    setFilteredRestaurant(restaurantsArray);
  };
  

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
    return(
      <h1>
        Looks like you're offline!! Please check your internet connection
      </h1>
    );

  //conditional rendering
  if(listOfRestaurants.length===0){
return<Shimmer/>;
  }


  return (
    <div>
      <div className="flex">
      <div>
        <input 
        type="text"

        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />
        <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
               transition duration-300 ease-in-out"
        onClick={()=>{
          //filter the restraunt cards and update the UI
          //searchText
          console.log(searchText);
         const filteredRestaurant= listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))
         setFilteredRestaurant(filteredRestaurant)
        }}
        >
          
          Search
        </button>
        </div>
        <button className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

          onClick={() => {
              const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div >
       {filteredRestaurant.map((restaurant, index) => (
       restaurant ? (
        <Link 
          key={restaurant?.data?.id || index}
          to={"/restaurants/"+restaurant?.id}
        >
        <RestaurantCard resData={restaurant} />
        </Link>
        ) : null
        ))}

      </div>
    </div>
  );
};

export default Body;
