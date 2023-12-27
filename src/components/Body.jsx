import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../utils/cardData";

const Body = () => {
  

  return (
    <div
      className="px-[200px] py-[50px] flex flex-wrap gap-9"
    >
      {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    ))}

    </div>
  )
}

export default Body