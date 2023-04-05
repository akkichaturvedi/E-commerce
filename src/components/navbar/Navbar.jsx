import { productRef } from "../../../firebase/Firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../../Zustand/searchstore/search";
import useCategoryDataStore from "../../Zustand/categoryserch/category";

function Navbar() {
    const navigate = useNavigate()
    const [searchData, setSearchData] = useState("")
    const [showCatogoryData, setShowCatogoryData] = useState([]) // for category

    const [userSearchRequestData, setUserSearchRequestData] = useState([]);

    const { searchDatastore, addData, clearData } = useSearchStore((state) => ({
        searchDatastore: state.searchDatastore,
        addData: state.addData,
        clearData: state.clearData,
    })) // Zustand used 

    const { addCategoryData, removeCategoryData } = useCategoryDataStore((state) => ({
        addCategoryData: state.addCategoryData,
        removeCategoryData: state.removeCategoryData,
    }))

    async function handleSearch() {
        try {
            clearData();
            // alert("mai daba re");
            const q = query(collection(db, "Products"), where("title", ">=", `${searchData.substring(0, 3)}`), where("title", "<=", `${searchData.substring(0, 3)}\uf8ff`));

            const _data = await getDocs(q);
            _data.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setUserSearchRequestData((pre) => [...pre, { ...(doc.data()), id: doc.id }]);
            })

            // searchDatastore ? navigate("/product/search") : alert("no data");
            setTimeout(() => {
                navigate("/product/search")
            }, 1000);
        } catch (error) {
            console.log("data not get from navbar");
        }
        setSearchData("")
    }
    useEffect(() => {
        if (userSearchRequestData) {
            userSearchRequestData.map((element, index) => {
                addData(element)
            })
        } else {
            console.log("no product found sorry");
        }
    }, [userSearchRequestData])

    //for category search data
    async function showCategory(element) {

        try {
            removeCategoryData();
            const q = query(productRef, where("category", "==", `${element.target.id}`));

            const queySnapshot = await getDocs(q);
            queySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                setShowCatogoryData((pre) => [...pre, { ...(doc.data()), id: doc.id }])
            });
            setTimeout(() => {
                navigate("/Selectedcategorypage")
            }, 500);
        } catch (error) {
            console.log("Data not get :", error);
        }
    }
    useEffect(() => {
        if (showCatogoryData) {
            showCatogoryData.map((element) => {
                addCategoryData(element)
            })
        } else {
            addCategoryData("no products of this category")
        }
    }, [showCatogoryData])


    return (
        <nav className="w-full px-4 py-4 border-b-1 border-gray-500 border-x-fuchsia-100 flex flex-wrap items-center justify-between shadow-xl">
            <div className="w-4/3 mb-4  md:mb-0  ">
                <ul className="w-full flex flex-wrap items-center justify-center list-none">
                    <li onClick={() => {
                        navigate("/")
                    }} id="Electronics" className="text-center text-lg font-mono pl-6 pr-2 cursor-pointer hover:text-cyan-400">
                        Home
                    </li>
                    <li onClick={showCategory} id="Electronics" className="text-center text-lg font-mono pl-6 pr-2 cursor-pointer hover:text-cyan-400">
                        Electronic's
                    </li>
                    <li onClick={showCategory} id="Grocery" className="text-center text-lg font-mono pl-6 pr-2 cursor-pointer hover:text-cyan-400">
                        Grocery
                    </li>
                    <li onClick={showCategory} id="Clothings" className="text-center text-lg font-mono pl-6 pr-2 cursor-pointer hover:text-cyan-400">
                        Clothing's
                    </li>
                    <li onClick={showCategory} id="Utensils" className="text-center text-lg font-mono pl-4 cursor-pointer hover:text-cyan-400">
                        Utensils
                    </li>
                    <li onClick={showCategory} id="Footwears" className="text-center text-lg font-mono pl-4 cursor-pointer hover:text-cyan-400">
                        Footwear's
                    </li>

                </ul>
            </div>
            <div>
                <div className="rounded-lg border-2 w-96 flex justify-between border-gray-300 py-2 md:ml-0 ml-4">
                    <input type="text" placeholder="Search..."
                        className="px-4 w-96 text-lg  first-letter:text-gray-400 text-black font-mono rounded-full outline-none  placeholder:text-gray-900"
                        value={searchData}
                        onChange={(e) => {
                            setSearchData(e.target.value)
                        }}
                    />
                    <button className="text-2xl cursor-pointer font-mono font-bold text-white bg-green-600 px-3 py-1 rounded-full mr-2"
                        onClick={handleSearch}>S</button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar