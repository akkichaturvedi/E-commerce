
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/Firebase";
import { getDoc, doc, } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
// import { ThreeDots } from "react-loader-spinner";
// import Paymentmode from "./Paymentmode";
import { useNavigate } from "react-router-dom";
// import { Payment } from "@mui/icons-material";

const userPaymentData = {
    Building: "",
    landmark: "",
    city: "",
    Taluka: "",
    distric: "",
}


function Eventbuynowpage() {
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState(false)

    // const [spiner, setSpiner] = useState(false)
    const [payemntData, setPaymentData] = useState(userPaymentData);
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
            // setSpiner(true)
            const _doc = doc(db, "events", id)
            const _data = await getDoc(_doc)
            console.log(_data.data());
            setDetail(_data.data())
            // setSpiner(false)
        }
        getDetials();
    }, [])

    const handlePaymentData = (e) => {
        const { name, value } = e.target;
        setPaymentData({
            ...payemntData,
            [name]: value
        })

    }

    const payMoney = () => {
        if (localStorage.getItem("email") && localStorage.getItem("pass")) {
            if (
                payemntData.Building === "" || payemntData.landmark === "" || payemntData.Taluka === "" || payemntData.city === "" || payemntData.distric === ""
            ) {
                toast.error("All details fields are required ...", {
                    position: "top-center",
                    autoClose: 2000,
                })
            } else {
                // setPaymentMethod(true)
                setPaymentData(userPaymentData)
                navigate(`/buynowpage/${id}/mode`)
                toast.success("Payment intiated ...", {
                    position: "top-center",
                    autoClose: 2000,
                })
            }
        }
        else {
            toast.error("Not register user Register first", {
                position: "top-center",
                autoClose: 2000,
            })
            setTimeout(() => {
                navigate("/usersign")
            }, 2000);
        }


    }

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center font-mono flex-col'>
                <div className='text-xl text-cyan-600'>
                    Payment Detaild For order placing
                </div>
                <div className='w-5/6 md:px-5 px-2 md:py-5 py-2 flex justify-between items-center md:flex-row flex-col border-emerald-50 rounded-lg shadow-2xl'>
                    <div className='w-3/5 px-4 py-4'>
                        <h2 className='mt-3 mb-4 ml-1 text-2xl'>Enter details </h2>
                        <form >
                            <input type="text"
                                name='Building'
                                value={payemntData.Building}
                                onChange={handlePaymentData}
                                placeholder='Building/room/block no.'
                                className="input mb-3 bg-slate-100 text-black input-bordered input-info w-full max-w-xs"
                            />
                            <br />
                            <input type="text"
                                name='landmark'
                                value={payemntData.landmark}
                                onChange={handlePaymentData}
                                placeholder='landmark /street/road'
                                className="input mb-3 bg-slate-100 text-black input-bordered input-info w-full max-w-xs"
                            />
                            <br />
                            <input type="text"
                                name='city'
                                value={payemntData.city}
                                onChange={handlePaymentData}
                                placeholder='city'
                                className="input mb-3 bg-slate-100 text-black input-bordered input-info w-full max-w-xs"
                            />
                            <br />
                            <input type="text"
                                name='Taluka'
                                value={payemntData.Taluka}
                                onChange={handlePaymentData}
                                placeholder='Taluka'
                                className="input mb-3 bg-slate-100 text-black input-bordered input-info w-full max-w-xs"
                            />
                            <br />
                            <input type="text"
                                name='distric'
                                value={payemntData.distric}
                                onChange={handlePaymentData}
                                placeholder='distric - pincode'
                                className="input mb-3 bg-slate-100 text-black input-bordered input-info w-full max-w-xs"
                            />

                        </form>
                    </div>
                    <div className='w-full border p-1'>
                        <div className="flex justify-between items-center w-full border px-6">
                            <div>Image</div>
                            <div>Title</div>
                            <div>Discount</div>
                            <div>Prize</div>
                        </div>
                        <div className='flex justify-between items-center w-full border'>
                            <div className='h-20 w-20'>
                                <img
                                    className='w-full h-full p-2'
                                    src={detail.img} />
                            </div>
                            <div>
                                {detail.title}
                            </div>
                            <div>
                                <span>Rs</span><span> {detail.discount}</span>
                            </div>
                            <div>
                                <span>Rs</span><span> {detail.price}</span>
                            </div>
                        </div>
                        <div className="mt-5 text-right">
                            <div className='pr-5 pt-3'>
                                <span>Total discount : </span> <span>{detail.discount}</span>
                            </div>
                            <div className='pr-5 pt-5'>
                                <span>Amount to Pay : </span> <span>{+(detail.price) - +(detail.discount)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={payMoney}
                    className='bg-blue-500 w-3/6 text-center cursor-pointer text-2xl uppercase hover:text-white hover:bg-blue-900 py-5 mt-2 rounded-lg '>
                    pay
                </div>
                <ToastContainer />
                <div onClick={() => {
                    navigate(`/eventsdetail/${id}`)
                }} className='bg-red-200 w-3/6 text-center cursor-pointer text-2xl uppercase hover:text-white hover:bg-red-600 py-5 mt-2 rounded-lg '>
                    cancel payment
                </div>
            </div>
            {/* {paymentMethod ? <Paymentmode /> : ""} */}
        </>
    )
}

export default Eventbuynowpage