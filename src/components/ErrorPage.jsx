import { useLocation } from "react-router-dom";
import '../index.css'

const ErrorPage = () => {

  const location = useLocation();
  const { state } = location;
  const err = state ? state.error : { status: 404, statusText: 'Not Found' };

  const handleRefresh = () => {
    window.location.reload(true);
  };

  return (
    <div className="error px-[200px] py-[100px] space-y-5 flex flex-col justify-start items-center h-screen">
      <img
        className="w-[300px]"
        alt="Error_Image"
        src="https://cdn-icons-png.flaticon.com/512/179/179386.png"
      ></img>
      <h1 className="font-black text-3xl">OOPS!</h1>
      <h1 className="font-bold text-2xl">Something went wrong. Please <a href="#" onClick={handleRefresh} className="text-blue-600 underline underline-offset-8">refresh the page</a> or check your internet connection.</h1>
      <h1 className="font-bold text-2xl">Error {err.status} : {err.statusText}</h1>
    </div>
  )
}

export default ErrorPage