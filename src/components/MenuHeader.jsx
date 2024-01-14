import { useState } from "react"

const MenuHeader = ({header}) => {

    const [favorite, setFavorite] = useState(false);

    const addToFavorites = () => {
        setFavorite(!favorite);
    }

    const goToTop = () => {
        window.scrollTo(0,0);
    };


    return (

            <div
            title="Click here to go on top of this page"
            onClick={goToTop} 
            className="cursor-pointer flex w-6/12 justify-between items-center border-b-2 border-gray-400 border-dashed rounded-lg bg-white fixed p-2 top-0">
                <div>
                    <div className="font-semibold text-xl">{header?.name}</div>
                    <div className="text-gray-500">{header?.sla?.slaString}</div>
                </div>

                <div title="Add to Favorites" 
                    className="cursor-pointer text-2xl"
                     onClick={addToFavorites}>
                     
                    {favorite ? "💝" : "🤍"}

                </div>
            </div>
    )
}

export default MenuHeader