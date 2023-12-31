import Button from "./Button"

const ShimmerHome = () => {
    const Card = () => {
        return (
            <div
                className='flex flex-col items-center w-[260px] rounded-md space-y-1 cursor-pointer bg-gray-200 h-[320px] shadow-md'
            >
                <div><div
                    className='h-[200px] w-screen rounded-md bg-center bg-cover'
                ></div></div>
                <div className='text-xl font-semibold text-center w-full truncate'></div>
                <div className='flex text-lg font-semibold space-x-3'>
                    <div className='flex '><h2 className='text-green-600'></h2> </div>
                    <div></div>
                </div>
                <div className='text-md text-center font-thin truncate w-full'></div>
                <div className="text-md text-center text-[#F05455] font-semibold"></div>


            </div>
        )
    }
    return (
        <div className="px-[200px] py-[50px] space-y-5 space-x-1">
            <div className="flex items-center space-x-3">
                <input className="border-2 border-gray-200 rounded-3xl p-2 px-4 bg-gray-200"></input>
                <button className="rounded-3xl border-2 border-gray-200 bg-gray-200 text-[#F05455] p-2 px-4 w-24 h-10 font-semibold"></button>
            </div>
            <div className="text-gray-200 space-x-1">
                <Button label='All Restaurants'/>
                <Button label='Top Rated Restaurants'/>
                <Button label='Fastest Delivery'/>
                <Button label='Pure Veg Restaurants'/>
                <Button label='Upto 3300 for Two'/>
            </div>
            
            <div className="flex flex-wrap gap-9 ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default ShimmerHome