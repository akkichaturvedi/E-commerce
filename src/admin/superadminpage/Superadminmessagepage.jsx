import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import { newSellerRef, db } from '../../../firebase/Firebase';
import { Bars } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

function Superadminmessagepage() {

    const [loader, setLoader] = useState(false)

    const [newSellerFromfirbase, setNewSellerFromfirbase] = useState([])

    async function getNewSellerMessageFromfirbase() {
        setLoader(true)
        const _data = await getDocs(newSellerRef)
        // console.log(_data);
        _data.forEach((doc) => {
            setNewSellerFromfirbase((pre) => [...pre, { ...(doc.data()), id: doc.id }])
        })
        setLoader(false)
    }

    useEffect(() => {
        getNewSellerMessageFromfirbase()
        // console.log(newSellerRef);
    }, [])

    const deleteProduct = async (id) => {
        console.log(id);
        const afterdeletionAllSeller = await deleteDoc(doc(db, "newsellers", `${id}`))
        setNewSellerFromfirbase([])
        setLoader(true)
        const _data = await getDocs(newSellerRef);
        _data.forEach((doc) => {
            // console.log(doc);
            setNewSellerFromfirbase((pre) => [...pre, { ...(doc.data()), id: doc.id }]);
        })
        setLoader(false)
        toast.success(("Seller Removed successfully"), {
            position: "top-center"
        })
    }
    
    return (
        <>
            <div className='md:text-3xl text-xl font-semibold font-mono w-full md:px-20 px-10 flex justify-between items-center py-8'>
                <span >ALL seller's List</span>
                <span>Total : <span>{newSellerFromfirbase.length}</span></span>
            </div>
            <div className='w-full flex justify-center flex-col items-center'>
                {
                    loader ? <div className="wi-full h-96 flex justify-center items-center"><Bars color='green' height={80} /></div>
                        :
                        newSellerFromfirbase.map((e, i) => {
                            return (
                                <div key={i} className=' w-2/3 rounded border shadow-xl px-5 py-5 mt-10 font-mono'>
                                    <div className='w-full'>
                                        <span>Name :</span><span> {e.name}</span>
                                    </div>
                                    <div className='w-full mt-2'>
                                        <span>Mobile Number :</span><span> {e.mNumber}</span>
                                    </div>
                                    <div className='w-full mt-2'>
                                        <span>Email :</span><span> {e.email}</span>
                                    </div>
                                    <div className='w-full mt-2'>
                                        <span>Shop no :</span><span> {e.shopNumber}</span>
                                    </div>
                                    <div className='w-full mt-2'>
                                        <span>Shop name :</span><span> {e.shopName}</span>
                                    </div>
                                    <div className='w-full mt-2'>
                                        <span>Address :</span><span> {e.address}</span>
                                    </div>
                                    <div className='w-full mt-2 text-right'>
                                        <Button onClick={() => deleteProduct(e.id)}>remove seller</Button>
                                    </div>
                                </div>
                            )
                        })
                }

            </div>
        </>
    )
}

export default Superadminmessagepage