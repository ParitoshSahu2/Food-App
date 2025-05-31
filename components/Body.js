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
      <div className=" search btn m-4 p-4">
        <input 
        type="text"
        className="border border-solid border-black m-2"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />
        <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
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
        <div className="filter btn m-4 px-4 flex items-center rounded-lg">
           <button className="px-4 py-2 bg-gray-100"
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
      </div>
      <div className="flex flex-wrap">
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
