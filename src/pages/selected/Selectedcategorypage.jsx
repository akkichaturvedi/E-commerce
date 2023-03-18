// import { useContext, useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import useCategoryDataStore from "../../Zustand/categoryserch/category";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { ThreeCircles } from "react-loader-spinner";
import { useState } from "react";

function Selectedcategorypage() {

    const [spiner , setSpiner] = useState(true)
    const getCatogoryData = useCategoryDataStore((state) => state.categoryStoredata);
    setTimeout(() => {
        setSpiner(false)
    }, 1000);
    return (
        <>
            <Navbar />
            <div className="w-full bg-cyan-50  mr-2 my-5 p-3 md:border md:border-gary-300 rounded-md flex flex-wrap items-center cursor-pointer">

                {
                    spiner ?
                        <div className="w-full bg-cyan-50 h-96 flex justify-center items-center">
                            <ThreeCircles color="black" size={50} />
                        </div>
                        :
                        getCatogoryData.map((element, index) => {
                            return (
                                <Link to={`/details/${element.id}`} key={index} > <div className="md:w-64 w-80 p-2 my-1 mx-3 border-2 hover:shadow-xl rounded-md">
                                    <div>
                                        <img src={element.img} alt="image"
                                            className="w-full h-64 hover:shadow-sm" />
                                    </div>
                                    <div className="text-left font-mono mt-4">
                                        <div className="text-xl  hover:text-blue-400">
                                            {element.title}
                                        </div>
                                        <div className="text-sm mt-2" id="detailData">
                                            {element.description.slice(0, 100)}
                                        </div>
                                        <div className="text-bold text-xl mt-2">
                                            <span>₹</span ><span> {element.price}</span>
                                        </div>
                                        <div className="text-bold text-sm mt-2">
                                            <span>free delivery</span>
                                        </div>
                                    </div>
                                </div></Link>
                            )
                        })}
            </div>
            <Footer />
        </>
    )
}

export default Selectedcategorypage