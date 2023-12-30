import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard"
import Button from "./Button";
import ShimmerHome from "./ShimmerHome";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.25005&lng=73.146236&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    console.log(json);

    //Optional Chaining
    setAllRestaurants(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  if (allRestaurants.length === 0) {
    return <ShimmerHome/>
  }

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

  const veg = () => {
    const filteredList = restaurants.filter(
      (res) => res.info.veg === true
    );
    setAllRestaurants(filteredList);
  }

  const under300 = () => {
    const filteredList = restaurants.map(
      (res) => {
        const costForTwoValue = parseInt(res.info.costForTwo.replace("₹","").split(" ")[0], 10);
        return {...res, costForTwoValue};
      }
    ).filter(
      (res) => res.costForTwoValue <= 300
    );
    setAllRestaurants(filteredList);
  }

  return (
    <div className="px-[200px] py-[50px] space-y-5 space-x-1">
      <Button
        onClick={showAllRestaurants}
        label="All Restaurants" />
      <Button
        onClick={topRatedRes}
        label="Top Rated Restaurants" />
      <Button
        onClick={quickDelivery}
        label="Fastest Delivery" />
      <Button
        onClick={veg}
        label="Pure Veg Restaurants" />
      <Button
        onClick={under300}
        label=" Upto ₹300 for Two" />
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