import { useEffect, useState } from "react"
import { offersPageAPI } from "../utils/common"
import RestaurantCard from "./RestaurantCard"
import Button from "./Button"
import ShimmerHome from "./ShimmerHome"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Offers = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(offersPageAPI);
        const json = await data.json();

        console.log(json);

        setRestaurants(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const showAllRestaurants = () => {
        setFilteredRestaurants(restaurants);
    }

    const topRatedRes = () => {
        const filteredList = restaurants.filter(
            (res) => res.info.avgRating >= 4
        );
        console.log(filteredList);
        setFilteredRestaurants(filteredList);
    }

    const quickDelivery = () => {
        const filteredList = restaurants.filter(
            (res) => res.info.sla.deliveryTime <= 20
        );
        console.log(filteredList);
        setFilteredRestaurants(filteredList);
    }

    const veg = () => {
        const filteredList = restaurants.filter(
            (res) => res.info.veg === true
        );
        setFilteredRestaurants(filteredList);
    }

    const under300 = () => {
        const filteredList = restaurants.map(
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

    return restaurants.length === 0 ? <ShimmerHome /> : (
        <div>
            <div className="px-[200px] py-[50px] space-y-5 space-x-1 mx-6">
                <div><Link className="text-blue-500" to="/" >Home</Link>/Offers</div>
                {/* Search Bar*/}
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
                            const filteredList = restaurants.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredList);
                        }}
                    >Search</button>
                </div>

                {/* Filter Options */}

                <div className="font-bold text-2xl">Restaurants With Great Offers Near You</div>

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

                {/* RestaurantCard Display */}
                <div
                    className=" flex flex-wrap gap-9"
                >
                    {filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurants/" + restaurant?.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} offer={restaurant} /></Link>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Offers