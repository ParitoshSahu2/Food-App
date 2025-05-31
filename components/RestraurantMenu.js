import Shimmer from "./Shimmer"; 
import {useParams} from "react-router-dom";
import useRestraurantMenu from "../utils/useRestrauntMenu";

const RestrauntMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestraurantMenu(resId);

    if(resInfo===null) return <Shimmer/>

const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[2]?.card?.card?.info || {};

const{itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]|| {};
console.log("before");

console.log(itemCards);

if(resInfo===null || resInfo === undefined)
    return<Shimmer/>


    return(
        <div >
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((item)=> (
                <li key={item.card.info.id}>
                    {item.card.info.name}-{"Rs. "}
                    {item.card.info.price/100||item.card.info.defaultPrice/100}
                </li>
           ))}
            </ul>
        </div>
    )
};
export default RestrauntMenu;