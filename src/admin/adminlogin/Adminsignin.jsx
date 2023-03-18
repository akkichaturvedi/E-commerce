
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase/Firebase";
import { addDoc } from "firebase/firestore"
import { ToastContainer, toast } from "react-toastify"


const auth = getAuth(app)


function Adminsignin() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [spiner, setSpiner] = useState(false)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Cpassword, setCpassword] = useState("")


    const registerUser = () => {
        if (email.match(mailformat) && Password === Cpassword) {
            try {
                setSpiner(true)
                createUserWithEmailAndPassword(auth, `A-${email}`, Password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);

                        setEmail("")
                        setCpassword("")
                        setPassword("")
                        setSpiner(false)
                        toast.success("Successfully created account...", {
                            position: "top-center",
                            autoClose: 2000,
                        })
                        setTimeout(() => {
                            navigate("/admin/login")
                        }, 2000);
                    })
                    .catch((error) => {
                        const errorCode = error.message;
                        toast.error(errorCode, {
                            position: "top-center"
                        })
                    });
            } catch (error) {
                toast.error("Not register user.... Slow internet")
            }
        } else {
            toast.error("please enter proper credential", {
                position: "top-center"
            })
        }

    }

    return (

        <>
        <span className="text-xl bg-gray-800 text-white border border-green-500 font-mono italic p-4 sticky top-5 right-0">Use <span className="underline">a-email</span> for login For security purpose 😊😊</span>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div id="sign-in-button"></div>
                        <div className="card-body">
                            <h1 className="text-2xl font-mono text-center font-bold mb-5 capitalize">Seller registration <br /> form</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={"email"} pattern=".+@globex\.com" size="30" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={"password"} placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    value={Cpassword}
                                    onChange={(e) => setCpassword(e.target.value)}
                                    type="password" placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={registerUser}>{spiner ? <TailSpin color="white" height={30} /> : "register"}</button>
                                <ToastContainer />
                            </div>
                            <div className="form-control mt-6">
                                <Link to={"/admin/login"}> <p className="cursor-pointer text-sm text-gray-600">Alredy seller? go to login</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminsignin