import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div
            className='flex bg-black text-white px-[200px] py-[25px] justify-around'
        >
            <div className='flex justify-between space-x-32'>
                <div className='flex flex-col space-y-[6px]'>
                    <div className='flex items-center space-x-2'>
                        <img
                            className="w-[70px] h-[70px] rounded-md"
                            alt="brand_logo"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZOX5_X_GNmsVPTdmVIBwbt2yNz9rPihllg&usqp=CAU"></img>
                        <div className='text-3xl font-bold text-[#F05455]'>Yummy Tummy</div>
                    </div>
                    <div className='text-gray-400'>&copy; {currentYear} Yummy Tummy Technologies Pvt. Ltd.</div>
                </div>
                <div className='company text-gray-400 space-y-[6px]'>
                    <div className='text-[#F05455] text-xl font-semibold'>Company</div>
                    <div className='cursor-pointer'>About</div>
                    <div className='cursor-pointer'>Careers</div>
                    <div className='cursor-pointer'>Team</div>
                    <div className='cursor-pointer'>YT One</div>
                    <div className='cursor-pointer'>YT Instamart</div>
                    <div className='cursor-pointer'>YT Genie</div>
                </div>
            </div>
            <div className='flex justify-between space-x-32'>
                <div className='space-y-14'>
                    <div className='contact-us text-gray-400 space-y-[6px]'>
                        <div className='text-[#F05455] text-xl font-semibold'>Contact Us</div>
                        <div className='cursor-pointer'>Help & Support</div>
                        <div className='cursor-pointer'>Partner with us</div>
                        <div className='cursor-pointer'>Ride with us</div>
                    </div>
                    <div className='legal text-gray-400 space-y-[6px]'>
                        <div className='text-[#F05455] text-xl font-semibold'>Legal</div>
                        <div className='cursor-pointer'>Terms & Conditions</div>
                        <div className='cursor-pointer'>Cookie Policy</div>
                        <div className='cursor-pointer'>Privacy Policy</div>
                    </div>
                </div>
                <div>
                    <div className='we-deliver-to text-gray-400 space-y-[6px]'>
                        <div className='text-[#F05455] text-xl font-semibold'>We deliver to</div>
                        <div className='cursor-pointer'>Bangalore</div>
                        <div className='cursor-pointer'>Gurgaon</div>
                        <div className='cursor-pointer'>Hyderabad</div>
                        <div className='cursor-pointer'>Delhi</div>
                        <div className='cursor-pointer'>Mumbai</div>
                        <div className='cursor-pointer'>Pune</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer