import { ThreeDots } from "react-loader-spinner"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import { Link } from "react-router-dom"
import useSearchStore from "../../Zustand/searchstore/search"
import Footer from "../../components/footer/Footer"

function Search() {

    const searchData = useSearchStore((state) => state.searchDatastore);
    // const [userSearchData, setUserSearchData] = useState("")

    // const [spiner, setspiner] = useState(true)

    // console.log(typeof(searchData));
    console.log(searchData);

    return (
        <>
            <Navbar />

            <div className="w-full bg-cyan-50 mr-2 my-5 p-3 md:border md:border-gary-300 rounded-md flex flex-wrap items-center cursor-pointer">
                {/* <Hcontent /> */}

                {searchData.map((element, index) => {
                    return (
                        <Link to={`/details/${element.id}`} key={index}> <div className="md:w-64 w-80 p-2 my-1 mx-3 border-2 hover:shadow-xl rounded-md">
                            <div>
                                <img src={element.img} alt="image"
                                    className="w-full h-64 hover:shadow-sm" />
                            </div>
                            <div className="text-left font-mono mt-4">
                                <div className="text-xl  hover:text-blue-400">
                                    {element.title}
                                </div>
                                <div className="text-sm mt-2" id="detailData">
                                    {element.description}
                                </div>
                                <div className="text-bold text-xl mt-2">
                                    <span>₹</span ><span> {element.price}</span>
                                </div>
                                <div className="text-bold text-xl mt-2">
                                    <span>₹</span ><span> {element.discount}</span>
                                </div>
                                <div className="text-bold text-sm mt-2">
                                    <span>free delivery</span>
                                </div>
                            </div>
                        </div></Link>
                    )
                })}
            </div>
            <Footer/>
        </>
    )
}

export default Search