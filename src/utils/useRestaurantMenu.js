import { useEffect, useState } from 'react'
import { MENU_API } from './common';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect (() => {
        fetchMenuData();
    },[]);

    const fetchMenuData = async () => {
        const data = await fetch(MENU_API+ resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();

        setResInfo(json.data);

    };

  return resInfo;
};

export default useRestaurantMenu