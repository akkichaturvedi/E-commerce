import { Button } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import useCartstore from "../../Zustand/savecartdata/cart"

function Cart() {
    const cartData = useCartstore((state) => state.cartData);
    console.log(cartData);

    return (
        <>
            <Navbar />
            <div className="w-5/6 flex justify-center items-center md:flex-row flex-col mt-5 md:ml-20 ml-10 font-mono">
                <div className="md:w-2/3 border mt-5">
                    <div className="w-full flex md:flex-row flex-col py-5  shadow-xl">
                        <div className="md:ml-0 ml-12">
                            <img src="https://images.unsplash.com/photo-1677510744661-bf619347037f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Data"
                                className="h-40 w-48 shadow-2xl mt-2 ml-2 hover:scale-110 transition" />
                        </div>
                        <div className="ml-5 mt-2 flex flex-col">
                            <span className="text-xl tetx-semibold hover:text-blue-400">
                                I am here Just do something
                            </span>
                            <span className="text-sm text-gray-500 mt-2">
                                Data hai
                            </span>
                            <span className="text-2sm text-gray-600 mt-2">
                                <span>Seller : </span><span>Suyash</span>
                            </span>
                            <span className="text-2xl text-bold mt-2">
                                <span>₹ </span><span>10,299</span>
                            </span>
                            <span>
                                <div className="w-80 mt-5 ">
                                    <Button variant="text" className=" hover:text-blue-600 mr-5
                        ">Save For later</Button>
                                    <Button variant="text" className="ml-10 hover:text-blue-600
                       ">Remove</Button>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="w-full border-t-2 md:text-right text-center pr-5 py-4">
                        <button className="text-2xl py-4 px-12 bg-orange-400 text-white
                        uppercase">place order</button>
                    </div>
                </div>
                <div className="border md:ml-5 md:w-1/3  w-2/3 mt-5 sticky top-2 right-2">
                    <div className="w-full flex flex-col ">
                        <span className="py-4 px-4 uppercase border shadow-md text-xl text-gray-400"> Price details</span>
                        <span className="w-full py-4 px-4 flex justify-between">
                            <span>Price(1 item)</span> <span>₹ <span>1000</span> </span>
                        </span>
                        <span className="w-full py-4 px-4 flex justify-between">
                            <span>Discount</span> <span className="text-green-500">₹ <span>1000</span> </span>
                        </span>
                        <span className="w-full py-4 px-4 flex justify-between">
                            <span>Dilivery charges</span> <span className="text-green-500 capitalize">free</span>
                        </span>
                        <span className="w-full py-4 px-4 flex justify-between text-gray-500 shadow-xl text-xl border">
                            <span>Total charges</span> <span >₹ <span>1000</span> </span>
                        </span>
                        <span className="w-full py-4 px-4 flex justify-between text-green-500">
                            <span>you will save ₹1,000 on this order</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart