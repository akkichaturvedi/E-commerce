import { useState } from "react"
import { addDoc } from "firebase/firestore";
import { newSellerRef } from "../../../firebase/Firebase";
import { toast, ToastContainer } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const sellerDataDetails = {
  name: "",
  mNumber: "",
  email: "",
  shopNumber: "",
  shopName: "",
  address: "",
}

function Sregisterpage() {

  const navigate = useNavigate();

  const [spiner, setSPiner] = useState(false)

  const [sellerData, setSellerData] = useState(sellerDataDetails);

  const handleInputData = (e) => {

    const { name, value } = e.target;
    setSellerData({
      ...sellerData,
      [name]: value
    })
  }

  //   let sendMail = require("../sendmail")({
  //     smtpHost:'localhost',
  //     smtpPort: 5173
  // });
  //   try {
  //     sendMail({
  //       from: "akkichaturvedi2222@gmail.com",
  //       to: "akki027services@gmail.com",
  //       subject: "Checking mail is coming or not",
  //       html: "Hello i am html, sended by akkichaturvedi"
  //     }, function (err, reply) {
  //       console.log(err && err.stack);
  //       console.dir(reply);
  //     })
  //   } catch (err) {
  //     console.log(err
  //     );
  //   }

  const sendUserdataInmail = async () => {
    if (sellerData.name === "" &&
      sellerData.mNumber === "" &&
      sellerData.email === "" &&
      sellerData.shopNumber === "" &&
      sellerData.shopName === "" &&
      sellerData.address === ""
    ) {
      toast.error("All field's are required...", {
        position: "top-center"
      })
    } else {
      try {
        setSPiner(true)
        await addDoc(newSellerRef, sellerData);
        toast.success("Data send Successfully", {
          position: "top-center",
          autoClose: 2000,
        }
        )
        setSPiner(false)
        setTimeout(() => {
          navigate("/s")
        }, 2000)
      } catch (error) {
        toast.error(error)
        setSPiner(false)
      }
      setSellerData(sellerDataDetails)
    }

  }

  return (
    <div className="w-full font-mono  h-screen flex flex-col items-center">
      <div className="w-full bg-slate-400 text-center mb-5 py-4 text-white capitalize">
        <h2 className="text-center text-xl md:text-3xl font-semibold">For Sellig product in our website</h2>
        <h3 className="text-center text-xl md:text-3xl font-semibold text-black mt-5">Register Here Your shop</h3>
      </div>
      <div className="md:w-3/4 border-5 mt-5 text-center">
        <input type="text"
          placeholder="Enter Name"
          className="focus:border-blue-300 focus:shadow-xl py-2 pl-3 mt-3 w-full outline-none placeholder:text-gray-500 rounded-lg text-xl  border-2"
          name="name"
          value={sellerData.name}
          onChange={handleInputData}
          required
        />
        <br />
        <input type="number"
          placeholder="Enter mobile Number"
          className="mobileNumber focus:border-blue-300 focus:shadow-xl py-2 pl-3 mt-3 w-full outline-none placeholder:text-gray-500 rounded-lg text-xl  border-2"
          name="mNumber"
          value={sellerData.mNumber}
          onChange={handleInputData}
          required
        />
        <br />
        <input type="email"
          placeholder="Enter Email /raja@gmail.com"
          className="focus:border-blue-300 focus:shadow-xl py-2 pl-3 mt-3 w-full outline-none placeholder:text-gray-500 rounded-lg text-xl  border-2"
          name="email"
          value={sellerData.email}
          onChange={handleInputData}
          required
        />
        <br />
        <input type="text"
          placeholder="Enter Shop No. /M-32 /54"
          className="focus:border-blue-300 focus:shadow-xl py-2 pl-3 mt-3 w-full outline-none placeholder:text-gray-500 rounded-lg text-xl border-2"
          name="shopNumber"
          value={sellerData.shopNumber}
          onChange={handleInputData}
          required
        />
        <br />
        <input type="text"
          placeholder="Enter Shop Name"
          className="focus:border-blue-300 focus:shadow-xl py-2 pl-3 mt-3 w-full outline-none placeholder:text-gray-500 rounded-lg text-xl border-2"
          name="shopName"
          value={sellerData.shopName}
          onChange={handleInputData}
          required
        />
        <br />
        <input type="text"
          placeholder="address / shivaji nagar salwad boisar west tal&dit-palghar pin code-401504"
          className="focus:border-blue-300 focus:shadow-xl py-2 pl-3 mt-3 w-full outline-none placeholder:text-gray-500 rounded-lg text-xl border-2"
          name="address"
          value={sellerData.address}
          onChange={handleInputData}
          required
        />
        <br />
        <br />
        <button className="border-1 px-8 py-2 bg-green-500 text-white
        text-xl rounded hover:bg-slate-400 hover:text-green-700 "
          onClick={sendUserdataInmail}
        >
          {spiner ? <TailSpin height={30} color="white" /> : "Submit Data"}
        </button>
        <ToastContainer />
        <br />
        <Button onClick={() => { navigate("/admin/login") }}>Already An Part of our comunity, Login here</Button>
      </div>
    </div>
  )
}

export default Sregisterpage