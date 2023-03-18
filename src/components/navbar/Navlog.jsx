import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Ulogin from "../loginforusers/Ulogin";

function Navlog() {
    return (
        <nav className="w-full px-6 pt-4 pb-2 border-b-2 border-gray-500 border-x-fuchsia-100 flex flex-wrap items-center justify-between ">
            <div className="text-3xl font-semibold text-cyan-500 first-letter:text-blue-500">
                McWoc<span className="text-red-500">S</span>
            </div>
            <div className="p-3 md:mt-0 mt-2 text-xl font-mono bg-gray-800 text-white rounded-sm">
                <span className="italic">Welcome to get service for selling your product in easy way 👍</span>
            </div>
            <div className="md:mt-0 mt-2">
                <Link to={"/userlogin"}><button className="border-1 px-8 py-2 bg-green-600 text-white
                    text-xl rounded hover:bg-slate-400 hover:text-green-700 capitalize md:mx-0">
                    Login here
                </button></Link>
            </div>
        </nav>
    )
}

export default Navlog