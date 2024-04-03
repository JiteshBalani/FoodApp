import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard"
import { HOME_PAGE_RES_DATA } from "../utils/common";
import Button from "./Button";
import ShimmerHome from "./ShimmerHome";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Spinner from "./Spinner"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(HOME_PAGE_RES_DATA);
    const json = await data.json();

    console.log(json);

    //Optional Chaining: something?.something1?.product?.info?.name
    setAllRestaurants(json?.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurants(json?.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);

  }

  const showAllRestaurants = () => {
    setFilteredRestaurants(allRestaurants);
  }

  const topRatedRes = () => {
    const filteredList = allRestaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    console.log(filteredList);
    setFilteredRestaurants(filteredList);
  }

  const quickDelivery = () => {
    const filteredList = allRestaurants.filter(
      (res) => res.info.sla.deliveryTime <= 20
    );
    console.log(filteredList);
    setFilteredRestaurants(filteredList);
  }

  const veg = () => {
    const filteredList = allRestaurants.filter(
      (res) => res.info.veg === true
    );
    setFilteredRestaurants(filteredList);
  }

  const under300 = () => {
    const filteredList = allRestaurants.map(
      (res) => {
        const costForTwoValue = parseInt(res.info.costForTwo.replace("₹", "").split(" ")[0], 10);
        return { ...res, costForTwoValue };
      }
    ).filter(
      (res) => res.costForTwoValue <= 300
    );
    setFilteredRestaurants(filteredList);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div
        className="h-screen px-[200px] py-[50px] flex flex-col justify-center items-center space-y-12  "
      >
        <div className="text-[#F05455] font-black italic text-3xl">Hi there!</div>
        <p className="text-xl">Looks like you're offline. Please check your connection</p>
      </div>
    )
  }

  return allRestaurants.length === 0 ? <Spinner /> : (
    <div className="px-[10vw] py-[50px] space-y-5 space-x-1">

      {/* Search Bar */}
      <div
        className="flex items-center space-x-3"
      >
        <input
          className="border-2 border-[#F05455] rounded-md p-2 px-4"
          placeholder="Type Restaurant Name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        ></input>
        <button
          className="rounded-md border-2 border-[#F05455] text-[#F05455] p-2 px-4 font-semibold"
          onClick={() => {
            console.log(searchText);
            const filteredList = allRestaurants.filter(res =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
            setSearchText("");
          }}
        >Search</button>
      </div>

      <div className="font-bold text-2xl">Popular Restaurants Near You</div>


      {/* Filter Options */}
      <Button
        onClick={showAllRestaurants}
        label="All Restaurants" />
      <Button
        onClick={topRatedRes}
        label="&#11088; Top Rated Restaurants" />
      <Button
        onClick={quickDelivery}
        label="&#9889; Fastest Delivery" />
      <Button
        onClick={veg}
        label="🍀 Pure Veg Restaurants" />
      <Button
        onClick={under300}
        label="&#128523; Upto ₹300 for Two" />
      <div
        className=" flex flex-wrap gap-8 justify-between items-center"
      >
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant?.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>

        ))}

      </div>
    </div>
  )
}

export default Body