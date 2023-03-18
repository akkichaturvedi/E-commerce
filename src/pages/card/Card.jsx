import { useEffect, useState } from "react"
import Hcontent from "../homepagecontenet/Hcontent"
import axios from "axios";
import { productRef } from "../../../firebase/Firebase";
import { getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Details } from "@mui/icons-material";


function Card() {

  // const [fakeProductData, setFakeproductData] = useState([]);

  // const url = "https://fakestoreapi.com/products"
  // function fakeData() {
  //   axios.get(url).then((response) => {
  //     setFakeproductData(response.data)
  //   }).catch((err) => {
  //     console.log("Data not get");
  //     console.log(err);
  //   })
  // }

  // console.log(fakeProductData.map(e =>{
  //   console.log(e.length);
  // }));
  // fakeData();


  const [productData, setProductData] = useState([])

  useEffect(() => {
    productFromfirbase();
  }, [])
  const productFromfirbase = async () => {
    try {
      const _data = await getDocs(productRef);
      _data.forEach((doc) => {
        setProductData((pre) => [...pre, { ...(doc.data()), id: doc.id }])
        // console.log(doc.id);
      });
    } catch (error) {
      console.log("data not recievid");
      console.log(error);
    }
  }
  const [showDataNumber, setShowDataNumber] = useState(10);

  const handleShowMore = () => {
    setShowDataNumber(showDataNumber + 5);
  }
  // const newArradata = productData.slice(0, 1)
  // console.log(newArradata);

  return (
    <>
      <div className="w-full py-6 mt-5 ml-10 uppercase mb-5 text-2xl "><span className="border-b-2 pb-3 border-cyan-500 border-w-200"> Our best products  </span></div>
      <div className="w-full my-5 p-3 md:border md:border-gary-300 rounded-3xl bg-cyan-50 flex flex-wrap items-center cursor-pointer">
        {/* <Hcontent /> */}

        {productData.slice(0, `${showDataNumber}`).map((element, index) => {
          return (
            <Link to={`/details/${element.id}`} key={index}> <div className="md:w-64 w-80 p-2 my-1 mx-5 border-2 hover:shadow-xl rounded-md">
              <div>
                <img src={element.img} alt="image"
                  className="w-full h-64 hover:shadow-sm" />
              </div>
              <div className="text-left font-mono mt-4">
                <div className="text-sm text-cyan-300">
                  <span>Seller :</span> {element.sellername}
                </div>
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
      <div className="w-full text-center">
        <button
          onClick={handleShowMore}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Show more
          </span>
        </button>
      </div>
    </>
  )
}

export default Card