import React, { useState, useEffect } from 'react'
import { productRef, db } from '../../../firebase/Firebase'
import { deleteDoc, getDocs, doc } from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner';
import { toast } from 'react-toastify';

function Addedproductpage() {

    const [spiner, setSpiner] = useState(false)

    const [allProductData, setAllProductData] = useState([]);

    async function productData() {
        setSpiner(true)
        const _data = await getDocs(productRef);
        _data.forEach((doc) => {
            // console.log(doc);
            setAllProductData((pre) => [...pre, { ...(doc.data()), id: doc.id }]);
        })
        setSpiner(false)
    }

    useEffect(() => {
        productData();
    }, [])

    console.log(allProductData);

    const deleteProduct = async (id) => {
        console.log(id);
        const afterdeletionAllData = await deleteDoc(doc(db, "Products", `${id}`))
        setAllProductData([])
        setSpiner(true)
        const _data = await getDocs(productRef);
        _data.forEach((doc) => {
            // console.log(doc);
            setAllProductData((pre) => [...pre, { ...(doc.data()), id: doc.id }]);
        })
        setSpiner(false)
        toast.success(("Product deleted successfully"), {
            position: "top-center"
        })
    }

    return (
        <>
            <div className='md:text-3xl text-xl font-semibold font-mono w-full md:px-20 px-10 flex justify-between items-center py-8'>
                <span >ALL product's List</span>
                <span>Total : <span>{allProductData.length}</span></span>
            </div>
            <div className='w-full px-5 py-4 md:flex flex-wrap items-center justify-center'>
                {spiner ? <div className='w-full h-96 mt-10 flex justify-center items-center'>
                    <ThreeCircles color='green' size={30} />
                </div> :
                    allProductData.map((element, index) => {
                        return (
                            <div key={index}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 mt-5">
                                    <figure><img src={element.img} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-sm text-cyan-300">{element.sellername}</h2>
                                        <h2 className="card-title">{element.title}</h2>
                                        <p>{element.description}</p>
                                        <p className='mt-3'><span>Price :</span> {element.price}</p>
                                        <p className='mt-3'><span>Discount :</span> {element.discount}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary" onClick={() => deleteProduct(element.id)}>Delete Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Addedproductpage