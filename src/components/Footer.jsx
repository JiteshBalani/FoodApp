import LogoFooter from './LogoFooter.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    // Footer section 1 = (Logo + copyright) + Company
    // Footer section 2 = (Contact us + Legal) + We deliver to

    return (
        <div
            className='flex bg-black text-white px-[10vw] py-[25px] justify-around items-center border-t-4 border-gray-300'
        >
            <div className='flex flex-col space-y-[6px] items-center'>
                <div className='flex items-center space-x-2'>
                    <img
                        className="w-[70px] h-[70px] rounded-md"
                        alt="brand_logo"
                        src={LogoFooter}
                    ></img>
                    <div className='yummy-tummy-title text-3xl font-bold text-[#F05455] pb-3'>yummy-tummy</div>
                </div>
                <div className='text-gray-400'>&copy; {currentYear} Yummy Tummy Technologies Pvt. Ltd.</div>
            </div>

            <div className='contact-us text-gray-400 space-y-[6px]'>
                <div className='text-[#F05455] text-xl font-semibold'>Contact Us</div>
                <div className='cursor-pointer'>Help & Support</div>
                <div className='cursor-pointer'>Partner with us</div>
                <div className='cursor-pointer'>Ride with us</div>
                <div className='cursor-pointer'>Careers</div>
            </div>

        </div>
    )
}

export default Footer