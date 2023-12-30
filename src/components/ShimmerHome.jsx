const ShimmerHome = () => {
    const Card = () => {
        return (
            <div
            className='flex flex-col items-center w-[260px] rounded-md space-y-1 cursor-pointer bg-gray-300 h-[320px]'
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
        <div className="px-[200px] py-[50px] flex flex-wrap gap-9 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default ShimmerHome