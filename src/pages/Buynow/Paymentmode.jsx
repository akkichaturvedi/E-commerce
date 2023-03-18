import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
import { toast, ToastContainer } from 'react-toastify'

function Paymentmode() {
    const [spiner, setSpiner] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    const [methodsForPayment, setmethodsForPayment] = useState("")

    const startPayment = () => {
        console.log(methodsForPayment);
        if (methodsForPayment) {
            toast.success("Payment started DO not close the page", {
                position: "top-center",
                autoClose: 2000,
            })
            setSpiner(true)
        }
    }
    return (

        <div className='w-full h-screen flex justify-center items-center font-mono flex-col'>
            <div className='text-xl bg-blue-500 w-80 text-center cursor-pointer  uppercase hover:text-white hover:bg-blue-900 py-3 mt-2 rounded-lg'>
                Select Payment Mode
            </div>
            <div>
                <select className="select select-accent w-full max-w-xs mt-5"
                    value={methodsForPayment}
                    onChange={(e) => {
                        setmethodsForPayment(e.target.value)
                    }}
                >
                    <option disabled selected>Payment Methods</option>
                    <option>Online</option>
                    <option>Credit card</option>
                    <option>Cash on delivery</option>
                </select>
            </div>
            <div
                onClick={startPayment}
                className='text-xl  mt-8 bg-blue-500 w-80 text-center cursor-pointer  uppercase hover:text-white hover:bg-blue-900 py-3  rounded-lg'>
                {spiner ? <div className='flex justify-center items-center'> <TailSpin height={30} color="white" /></div> : "Start Payment"}
            </div>
            <ToastContainer />
            <div onClick={() => {
                navigate(`/details/${id}`)
            }} className='bg-red-200 w-60 text-center cursor-pointer text-xl uppercase hover:text-white hover:bg-red-600 py-3 mt-2 rounded-lg '>
                cancel payment
            </div>
        </div>

    )
}

export default Paymentmode