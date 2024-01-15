import { useState } from "react"

const MenuHeader = ({ header }) => {

    const [favorite, setFavorite] = useState(false);

    const addToFavorites = () => {
        setFavorite(!favorite);
    }

    const goToTop = () => {
        window.scrollTo(0, 0);
    };

    const goBack = () => {
        window.history.go(-1);
    }


    return (

        <div
            className="cursor-pointer flex w-6/12 justify-between items-center border-b-2 border-gray-400 border-dashed rounded-lg bg-gray-50 z-50 fixed p-2 top-0">
                <div className="flex items-center space-x-2">
                <div title="Go back to explore more restaurants" 
                className="cursor-pointer text-2xl"
                onClick={goBack}
                >🔙</div>
            <div>
                <div className="font-semibold text-xl">{header?.name}</div>
                <div className="text-gray-500">{header?.sla?.slaString}</div>
            </div>
            </div>
            <div className="flex space-x-2">
                <div title="Add to Favorites"
                    className="cursor-pointer text-2xl"
                    onClick={addToFavorites}>

                    {favorite ? "💝" : "🤍"}

                </div>
                <div title="Go to top of the page"
                    className="cursor-pointer text-2xl"
                    onClick={goToTop}>

                    🔝

                </div>
            </div>
        </div>
    )
}

export default MenuHeader