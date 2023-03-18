import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { eventRef } from "../../../firebase/Firebase";
import Countdown from "react-countdown";

function Event() {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        productFromfirbase();
    }, [])
    const productFromfirbase = async () => {
        try {
            const _data = await getDocs(eventRef);
            _data.forEach((doc) => {
                setProductData((pre) => [...pre, { ...(doc.data()), id: doc.id }])
                // console.log(doc.id);
            });
        } catch (error) {
            console.log("data not recievid");
            console.log(error);
        }
    }

    return (
        <>
            <div className="w-full text-2xl uppercase mb-3 mt-3 ml-10">
                <span className="border-b-2 border-purple-900 bb-3 tracking-widest">Best events</span>
            </div>
            <div className="w-full mt-5 flex justify-center rounded-3xl items-center flex-col bg-blue-50">
                {
                    productData.slice(0, 2).map((element, index) => {
                        return (
                            <Link to={`/eventsdetail/${element.id}`} key={index}> <div className="w-full mt-4 mb-4 px-5 py-5 flex justify-between bg-slate-200 rounded-lg">

                                <div className="w-1/3 p-3 border rounded h-64 hover:scale-110 ease-in-out hover:shadow-lg">
                                    <img src={element.img} />
                                </div>
                                <div className="w-2/3 border ml-5 mt-2 p-4 font-mono bg-cyan-50 rounded-lg">
                                    <div className="text-sm text-cyan-600"><span>Seller :</span> {element.sellername}</div>
                                    <div className="text-2xl mt-3">{element.title}</div>
                                    <div className="text-sm text-gray-600 mt-1">{element.description}</div>
                                    <div className="text-xl mt-3"><span>Price : ₹ </span>{element.price}</div>
                                    <div className="text-2xl text-green-300 mt-2"><span className="text-gray-500">Discount : ₹ </span>{element.discount}</div>
                                    <div className="text-xl text-red-500 mt-3 animate-bounce">Huury Up Limited time offer</div>
                                    <div>
                                        2 day's only , start at 12-03-2023
                                    </div>
                                    <div className="w-full text-end mr-5">
                                        <Link to={`/eventsbuynow/${element.id}`}><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-300">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Buy now
                                            </span>
                                        </button></Link>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Event