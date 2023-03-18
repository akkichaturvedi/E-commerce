import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from "firebase/firestore"
import { productRef } from "../../../firebase/Firebase"
import { toast, ToastContainer } from 'react-toastify';

function Addproductpage() {

    const [sellerName, setSellerName] = useState('');
    const [type, setType] = useState('');
    const [imgFile, setImgfile] = useState("")
    const [pname, setPname] = useState("")
    const [pprice, setPprice] = useState("")
    const [dPrice, setDprice] = useState("")
    const [Description, setDescription] = useState("")

    const [spiner, setSpiner] = useState(false)

    const addProducts = async (e) => {
        e.preventDefault();
        try {
            if (type === "" &&
                imgFile === "" &&
                pname === "" &&
                pprice === "" &&
                dPrice === "" &&
                Description === "" &&
                sellerName === "") {
                toast.error("All field's are required...", {
                    position: "top-center",
                })

            } else {
                setSpiner(true)
                await addDoc(productRef, {
                    img: imgFile,
                    title: pname,
                    price: pprice,
                    discount: dPrice,
                    description: Description,
                    category: type,
                    sellername: sellerName,
                })
                toast.success("Product Added successfully", {
                    position: "top-center"
                })
            }
        } catch (error) {
            toast.error(error, {
                position: "top-center"
            })
        }
        setType("")
        setImgfile("")
        setPname("")
        setPprice("")
        setDprice("")
        setDescription("")
        setSpiner(false)
    }


    return (

        <form className='w-2/3 border-2 md:mt-21 mt-10 md:ml-64 ml-16 px-5 py-6 bg-slate-200 rounded-md'>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="text" name="Name" id="product_Name" className="block mb-2 placeholder:mono placeholder:text-sm placeholder:text-black py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required
                    value={sellerName}
                    onChange={
                        (e) => {
                            setSellerName(e.target.value)
                        }
                    }
                    placeholder="Seller_Name"
                />
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="text" name="Name" id="product_Name" className="block mb-2 placeholder:mono placeholder:text-sm placeholder:text-black py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required
                    value={pname}
                    onChange={
                        (e) => {
                            setPname(e.target.value)
                        }
                    }
                    placeholder="Product_Name"
                />
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <Box sx={{ minWidth: 180 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Product_Categary</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Product_Categary"
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                            required
                        >
                            <MenuItem value={"Electronics"}>Electronics</MenuItem>
                            <MenuItem value={"Footwears"}>Footwears</MenuItem>
                            <MenuItem value={"Clothings"}>Clothings</MenuItem>
                            <MenuItem value={"Grocery"}>Grocery</MenuItem>
                            <MenuItem value={"Utensils"}>Utensils</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <textarea type="number" name="file" id="floating_file" rows="4" className="block p-2.5 w-full placeholder:text-black placeholder:mono placeholder:text-sm text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={Description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                    placeholder="Product_Description"
                />
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <input type="number" name="file" id="floating_file" className="block placeholder:mono placeholder:text-black placeholder:text-sm py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required
                    value={pprice}
                    onChange={
                        (e) => {
                            setPprice(e.target.value)
                        }
                    }
                    placeholder="Product_Price"
                />
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="number" name="file" id="floating_file" className="block placeholder:mono placeholder:text-black placeholder:text-sm py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required
                    value={dPrice}
                    onChange={
                        (e) => {
                            setDprice(e.target.value)
                        }
                    }
                    placeholder="Product_Discount"
                />
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="file" id="floating_file" className="block placeholder:mono placeholder:text-black placeholder:text-sm py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required
                    value={imgFile}
                    onChange={
                        (e) => {
                            setImgfile(e.target.value)
                        }
                    }
                    placeholder="Image_Link"
                />
            </div>
            <div className="relative z-0 w-full  group text-center">
                <button onClick={addProducts} className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase ">
                    {spiner ? <TailSpin color="white" height="30" className="text-center" /> : `ADD PRODUCT`}
                </button>
                <ToastContainer />
            </div>

        </form>

    )
}

export default Addproductpage