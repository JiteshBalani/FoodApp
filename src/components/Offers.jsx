import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Button from "./Button"
import ShimmerHome from "./ShimmerHome"

const Offers = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=19.25005&lng=73.146236")
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
    return restaurants.length === 0 ? <ShimmerHome/> : (
        <div>
            <Navbar />
            <div className="px-[200px] py-[50px] space-y-5 space-x-1">
                <div>Home/Offers</div>
                {/* Search Bar*/}
                <div
                    className="flex items-center space-x-3"
                >
                    <input
                        className="border-2 border-[#F05455] rounded-3xl p-2 px-4"
                        placeholder="Type Restaurant Name"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    ></input>
                    <button
                        className="rounded-3xl border-2 border-[#F05455] text-[#F05455] p-2 px-4 font-semibold"
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
                    label="&#9752; Pure Veg Restaurants" />
                <Button
                    onClick={under300}
                    label="&#128523; Upto ₹300 for Two" />

                {/* RestaurantCard Display */}
                <div
                    className=" flex flex-wrap gap-9"
                >
                    {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} offer={restaurant} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Offers