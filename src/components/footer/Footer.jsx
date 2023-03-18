import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';

function Footer() {

    const screenTop = () => {
        scrollTo(0, 0)
    }

    return (
        <footer className="w-full bg-slate-800 mt-6">
            <div className="text-white  text-cente w-full text-center p-3 bg-slate-600 " >
                <button onClick={screenTop} className="capitalize text-sm">
                    back to top
                </button>
            </div>
            <div className="md:flex md:justify-around md:items-center w-full text-white py-8">
                <div className="capitalize text-sm flex flex-col text-center mb-6">
                    About Us
                    <div className="text-sm mt-5 font-semibold text-cyan-500 first-letter:text-blue-500">
                        McWoc<span className="text-red-500">S</span>
                    </div>
                </div>
                <div className="capitalize text-sm flex flex-col md:text-left text-center">
                    <div className='items-center'>
                        <hr className='md:hidden mb-4' />
                    </div>
                    Contact Us
                    <div className="text-sm mt-5 ">
                        <span>fakemail@gmail.com</span>
                    </div>
                    <div className="text-sm mt-5 ">
                        <span><InstagramIcon /> Instragram</span>
                    </div>
                    <div className="text-sm mt-5 ">
                        <span><TwitterIcon /> Twiter</span>
                    </div>
                </div>
                <div className="capitalize text-sm flex flex-col  text-center">
                    <div className='items-center'>
                        <hr className='md:hidden mb-4 mt-4' />
                    </div> 
                    <span className='uppercase'>Sell Your product 
                    <ThumbUpIcon
                        className='ml-2 pb-1'
                    />
                    </span>
                    <div className="text-sm mt-5 ">
                        <span className='capitalize'>With collaboration of us</span>
                    </div>
                    <Link to={"/sregister"}><button className="border-1 px-8 py-2 bg-green-500 text-white
                    text-sm rounded hover:bg-slate-400 hover:text-green-700 mt-5 capitalize md:mx-0 mx-8">
                        Become A seller
                    </button></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer