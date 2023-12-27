import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../utils/cardData";
import Button from "./Button";

const Body = () => {

  const [topRestaurants, setTopRestaurants] = useState(restaurants);

  const topRatedRes = () => {
    const filteredList = topRestaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    console.log(filteredList);
    setTopRestaurants(filteredList);
  }

  return (
    <div className="px-[200px] py-[50px] space-y-2">
      <Button
        onClick={topRatedRes}
        label="Top Rated Restaurants" />
      <div
        className=" flex flex-wrap gap-9"
      >
        {topRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    </div>
  )
}

export default Body