import LogoFooter from './LogoFooter.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    // Footer section 1 = (Logo + copyright) + Company
    // Footer section 2 = (Contact us + Legal) + We deliver to

    return (
        <div
            className='flex bg-black text-white px-[200px] py-[25px] justify-around border-t-4 border-gray-300'
        >
            {/* SECTION 1 STARTS HERE. */}

            {/* Copyright +Company section starts here. */}
            <div className='flex justify-between space-x-32'>
                <div className='flex flex-col space-y-[6px]'>
                    <div className='flex items-center space-x-2'>
                        <img
                            className="w-[70px] h-[70px] rounded-md"
                            alt="brand_logo"
                            src={LogoFooter}
                            ></img>
                        <div className='yummy-tummy-title text-3xl font-bold text-[#F05455]'>yummy-tummy</div>
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
            {/* ========================================================================== Copyright + Company section starts here. */}
            {/* SECTION 1 ENDS HERE. */}


            {/* SECTION 2 STARTS HERE. */}
            <div className='flex justify-between space-x-32'>

                {/* Contact us + Legal sections starts here. */}
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
                {/* ===================================================================== Contact us + Legal sections starts here. */}

                {/* We deliver to section starts here */}
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
                {/* =========================================================================== We deliver to section ends here */}

            </div>
            {/* SECTION 2 STARTS HERE. */}


        </div>
    )
}

export default Footer