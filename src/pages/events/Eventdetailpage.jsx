
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { ThreeDots } from 'react-loader-spinner';
import { db } from '../../../firebase/Firebase';
import Navbar from '../../components/navbar/Navbar';
import useCartstore from '../../Zustand/savecartdata/cart';
import Footer from '../../components/footer/Footer';

function Eventdetailpage() {

    // const  addCartData  = useCartstore((state) => ({
    //     addCartData: state.addCartData,
    // })
    const [CartDataaddedByuser, setCartDataaddedByuser] = useState([])
    const addCartData = useCartstore((state) => state.addCartData)

    const [spiner, setSpiner] = useState(false)
    const [detail, setDetail] = useState({
        description: "",
        img: "",
        price: "",
        title: "",
        discount: "",
    })
    const { id } = useParams();

    useEffect(() => {
        async function getDetials() {
            setSpiner(true)
            const _doc = doc(db, "events", id)
            const _data = await getDoc(_doc)
            // console.log(_data.data());
            setDetail(_data.data())
            setSpiner(false)
        }
        getDetials();
    }, [])


    const saveProductIntoacart = async () => {
        console.log("clicked");
        const _doc = doc(db, "Products", id)
        const _data = await getDoc(_doc)
    }


    return (
        <>
            <Navbar />

            <div className="w-full  flex md:flex-row flex-col mt-10 ml-5  pl-10 pr-10">
                {spiner ? <div className='w-full h-96 flex justify-center items-center'><ThreeDots color='black' height={600} width={120} /></div> :
                    <>
                        <div className='mt-1'>
                            <img src={detail.img} alt="Data"
                                className="h-84 w-80 shadow-2xl hover:scale-110 transition" />
                        </div>
                        <div className="md:ml-5 px-5 md:mt-0 rounded-lg bg-gray-200  mt-5 flex flex-col border w-full">
                            <span className="md:text-3xl">
                                {detail.title}
                            </span>
                            <span className=" mt-2 text-sm text-gray-400">
                                {detail.description}
                            </span>
                            <span className="mt-5">
                                <span className="text-2xl">Rating:</span>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div>
                            </span>
                            <span className="text-2xl mt-5">
                                <span>Price:-</span> <span>₹ <span>{detail.price}</span></span>
                            </span>
                            <span className="text-2xl mt-5">
                                <span>Discount:-</span> <span>₹ <span>{detail.discount}</span></span>
                            </span>
                            <span>
                                <div className="w-full  mt-5">
                                    <Link to={`/eventsbuynow/${id}`}><button className="text-2xl m-5 md:ml-0 py-4 px-12 bg-orange-400 text-white
                        uppercase"><FlashOnIcon /> Buy Now</button></Link>
                                    <button className="text-2xl py-4 mt-3 md:mt-0 px-12 ml-4 bg-orange-500 text-white
                        uppercase"
                                        onClick={saveProductIntoacart}><ShoppingCartIcon /> Add to cart</button>
                                </div>
                            </span>
                        </div>
                    </>}
            </div>
            <Footer />
        </>
    )
}

export default Eventdetailpage