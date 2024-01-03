import React, { useEffect } from 'react'
import { MENU_API } from '../utils/common';

const Menu = () => {

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.25005&lng=73.146236&restaurantId=176295&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);


    };
  return (
    <div>Menu</div>
  )
}

export default Menu