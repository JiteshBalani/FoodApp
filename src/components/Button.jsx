const Button = ({ onClick, label }) => {
    
    return (
        <button className='text-lg px-2 py-1 text-center bg-gray-200 w-fit rounded-lg cursor-pointer focus:font-semibold focus:ring-4 ring-[#F05455] ring-inset'
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button