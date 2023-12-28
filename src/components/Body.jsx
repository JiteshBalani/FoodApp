import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../utils/cardData";
import Button from "./Button";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(restaurants);


  const showAllRestaurants = () => {
    setAllRestaurants(restaurants);
  }

  const topRatedRes = () => {
    const filteredList = restaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    console.log(filteredList);
    setAllRestaurants(filteredList);
  }

  const quickDelivery = () => {
    const filteredList = restaurants.filter(
      (res) => res.info.sla.deliveryTime <= 20
    );
    console.log(filteredList);
    setAllRestaurants(filteredList);
  }

  return (
    <div className="px-[200px] py-[50px] space-y-2 space-x-1">
      <Button
        onClick={showAllRestaurants}
        label="All Restaurants" />
      <Button
        onClick={topRatedRes}
        label="Top Rated Restaurants" />
      <Button
        onClick={quickDelivery}
        label="Fastest Delivery" />
      <div
        className=" flex flex-wrap gap-9"
      >
        {allRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    </div>
  )
}

export default Body