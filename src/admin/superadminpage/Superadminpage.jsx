import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import MessageIcon from '@mui/icons-material/Message';
import Superadminmessagepage from './Superadminmessagepage';
import { toast, ToastContainer } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
// import Addproductpage from '../adminepage/Addedproductpage';
import Existingseller from './Existingseller';
import Addproductpage from '../adminepage/Addproductpage';
import Addedproductpage from '../adminepage/Addedproductpage';
import Addeventpage from './Addeventpage';
// import { getDocs, query } from 'firebase/firestore';
// import { newSellerRef } from '../../../firebase/Firebase';


function Superadminpage() {

    const [welcomPage, setWelcomePage] = useState(true)
    const [sellerMessagepage, setSellermessagePage] = useState(false)
    const [AddproductpageForsuperadmin, setAddproductpageForsuperadmin] = useState(false)
    const [AddedproductpageForsuperadmin, setAddedproductpageForsuperadmin] = useState(false)
    const [AddeventpageForsuperadmin, setAddeventpageForsuperadmin] = useState(false)

    const handleAddedproducPage = () => {
        setWelcomePage(false)
        setSellermessagePage(false)
        setAddeventpageForsuperadmin(false)
        setAddproductpageForsuperadmin(false)
        setAddedproductpageForsuperadmin(true)
        toast.success(("You are in Added product section..."), {
            position: "top-center"
        })
    }

    const handleSetSellermessagePage = () => {
        setWelcomePage(false)
        setAddproductpageForsuperadmin(false)
        setAddeventpageForsuperadmin(false)
        setAddedproductpageForsuperadmin(false)
        setSellermessagePage(true)
        toast.success("You are in New user message section...", {
            position: "top-center"
        })
    }
    const handleSetExistingSellerpage = () => {
        setWelcomePage(false)
        setAddeventpageForsuperadmin(false)
        setAddedproductpageForsuperadmin(false)
        setSellermessagePage(false)
        setAddproductpageForsuperadmin(true)
        toast.success(("You are in add product section..."), {
            position: "top-center"
        })
    }
    const handleAddedEventPage = () => {
        setWelcomePage(false)
        setAddedproductpageForsuperadmin(false)
        setSellermessagePage(false)
        setAddproductpageForsuperadmin(false)
        setAddeventpageForsuperadmin(true)
        toast.success(("You are in add Evnent section..."), {
            position: "top-center"
        })
    }



    const handleAlert = () => {
        setAddedproductpageForsuperadmin(false)
        setSellermessagePage(false)
        setAddproductpageForsuperadmin(false)
        setWelcomePage(true)
        toast('🦄 Superadmin page', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
        });
    }

    return (
        <>

            <nav className="flex z-10 sticky bg-slate-50 top-0 left-0 justify-between items-center px-2 py-6 border-b-2 shadow-xl">
                <div>
                    <Button varient="text" onClick={handleAlert}>superAdmin page</Button>
                </div>
                <div className='w-3/2 flex '>
                    <div className='mr-5'><Button varient="text" onClick={handleSetSellermessagePage}>sellers</Button></div>
                    <div className='mr-5'><Button varient="text" className='ml-8' onClick={handleSetExistingSellerpage}><AddIcon className='mr-1' /> product</Button></div>
                    <div className='mr-5'><Button varient="text" className='ml-8' onClick={handleAddedEventPage}><AddIcon className='mr-1' /> EVENTS</Button></div>
                    <div className='mr-5'><Button varient="text" className='ml-8' onClick={handleAddedproducPage} >Added Product's</Button></div>
                    <ToastContainer />
                </div>
            </nav>
            {sellerMessagepage ? <Superadminmessagepage /> : ""}
            {AddproductpageForsuperadmin ? <Addproductpage /> : ""}
            {AddedproductpageForsuperadmin ? <Addedproductpage /> : ""}
            {AddeventpageForsuperadmin ? <Addeventpage /> : ""}

            {welcomPage ? <div className='text-center font-mono'>
                <h1 className='text-4xl capitalize mt-10'>Welcome to super Admin Page</h1>
                <h1 className='text-3xl mt-8 capitalize'>Performs all the task related to admin and users</h1>
            </div>
                : ""}
        </>
    )
}

export default Superadminpage