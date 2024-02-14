import { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect (() => {
        fetchMenuData();
    },[]);

    const fetchMenuData = async () => {
        const data = await fetch(`https://yummytummy-f8eh.onrender.com/api/menu?restaurantId=${resId}`)
        const json = await data.json();

        setResInfo(json.data);

    };

  return resInfo;
};

export default useRestaurantMenu