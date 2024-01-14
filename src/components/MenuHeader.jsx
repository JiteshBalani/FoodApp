import { useState } from "react"

const MenuHeader = ({header}) => {

    const [favorite, setFavorite] = useState(false);

    const addToFavorites = () => {
        setFavorite(!favorite);
    }


    return (
        <div className="py-0">

            <div className="flex w-6/12 justify-between items-center ring-[#F05455] rounded-lg bg-gray-200 fixed p-4 py-2">
                <div>
                    <div className="font-semibold text-xl">{header?.name}</div>
                    <div className="text-gray-500">{header?.sla?.slaString}</div>
                </div>

                <div className="cursor-pointer text-2xl"
                     onClick={addToFavorites}>

                    {favorite ? "💝" : "🤍"}

                </div>
            </div>
        </div>
    )
}

export default MenuHeader