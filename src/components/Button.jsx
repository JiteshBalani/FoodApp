const Button = ({ onClick, label }) => {
    
    return (
        <button className='text-lg px-2 py-1 text-center bg-gray-200 w-fit rounded-lg cursor-pointer active:font-semibold'
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button