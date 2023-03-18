import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { toast, ToastContainer } from 'react-toastify';
import Addproductpage from './Addproductpage';
import Adminproductaddedpage from './Adminproductaddedpage';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Hearts } from 'react-loader-spinner';
import Orderpage from './Orderpage';


function Adminpage() {

    const [welcomPage, setWelcomePage] = useState(true)
    const [orderPage, setOrderPage] = useState(false)
    const [addProductPage, setAddproductPage] = useState(false)
    const [allAddedproductpagrForadmin, setAlladdedproductpageFOradmin] = useState(false)

    const handleAddproductPage = () => {
        setOrderPage(false)
        setWelcomePage(false)
        setAlladdedproductpageFOradmin(false)
        setAddproductPage(true)
        toast.success("You are now in add product page", {
            position: "top-center",
            autoClose: 2000,
        })
    }
    const handleAddedproductPage = () => {
        setWelcomePage(false)
        setOrderPage(false)
        setAddproductPage(false)
        setAlladdedproductpageFOradmin(true)
        toast.success("You are now in added product page", {
            position: "top-center",
            autoClose: 2000,
        })
    }

    const handleOrderPage = () =>{
        setWelcomePage(false)
        setAddproductPage(false)
        setAlladdedproductpageFOradmin(false)
        setOrderPage(true)
        toast.success("User order page", {
            position: "top-center",
            autoClose: 2000,
        })
    }

    const handleAlert = () => {
        toast('🦄 Welcome you are in admin page', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
        });
        setAddproductPage(false)
        setOrderPage(false)
        setAlladdedproductpageFOradmin(false)
        setWelcomePage(true)
    }
    return (
        <>
            <nav className="flex justify-between items-center px-2 py-6 border-b-2 shadow-xl">
                <div className=''>
                    <Button varient="text" onClick={handleAlert}>Admin page</Button>
                    <ToastContainer />
                </div>
                <div className='w-3/5 flex justify-end'>
                    <div className='ml-4'><Button varient="text" onClick={handleOrderPage}>orders</Button></div>
                    <div className='ml-4'><Button varient="text" onClick={handleAddproductPage}><AddIcon className='mr-1' /> product</Button></div>
                    <div className='ml-4'><Button varient="text" className='ml-2' onClick={handleAddedproductPage}>Added product</Button></div>
                </div>
            </nav>
            {addProductPage ? <Addproductpage /> : ""}
            {orderPage ? <Orderpage /> : ""}
            {allAddedproductpagrForadmin ? <Adminproductaddedpage /> : ""}
            {welcomPage ? <div className='text-center font-mono'>
                <h1 className='text-4xl capitalize mt-10'>Welcome to Admin Page</h1>
                <h1 className='text-3xl mt-8 capitalize'>Thanks for being a Part of our comunity</h1>
            </div>
                : ""}
        </>
    )
}

export default Adminpage