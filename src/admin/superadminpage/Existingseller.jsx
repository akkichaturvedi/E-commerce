import Button from '@mui/material/Button';

function Existingseller() {
    return (
        <>
            <h1 className='text-center text-2xl font-mono mt-5'>Existing seller's message</h1>
            <div className='w-full flex justify-center flex-col items-center'>
                <div className=' w-2/3 rounded border shadow-xl px-5 py-5 mt-10 font-mono'>
                    <div className='w-full'>
                        <span>Name :</span><span> Ankur</span>
                    </div>
                    <div className='w-full mt-2'>
                        <span>Mobile Number :</span><span> number</span>
                    </div>
                    <div className='w-full mt-2'>
                        <span>Email :</span><span> email</span>
                    </div>
                    <div className='w-full mt-2'>
                        <span>Shop no :</span><span> shop no</span>
                    </div>
                    <div className='w-full mt-2'>
                        <span>Shop name :</span><span> shop name</span>
                    </div>
                    <div className='w-full mt-2'>
                        <span>Address :</span><span> add</span>
                    </div>
                    <div className='w-full mt-2 text-right'>
                        <Button>Remove seller</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Existingseller