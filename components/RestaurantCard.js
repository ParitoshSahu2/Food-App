import {CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
        cloudinaryImageId = "",
        name = "Unknown Restaurant",
        cuisines = [],
        avgRating = "N/A",
        costForTwo = "N/A",
        sla = {}
      } = resData;
    
    return(
        <div className="bg-gray-200 m-4 p-4 w-[200px] rounded-lg hover:bg-gray-300">
            <img className="rounded-lg"
             src={CDN_URL+
                    cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} STARS</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

    //high order component- normal function which takes a compo as a argument then enchases it and retrun it 
export const withPromtedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
                    Promoted
                </label> 
                <RestaurantCard{...props}/>
            </div>
        )
    }
}

export default RestaurantCard;