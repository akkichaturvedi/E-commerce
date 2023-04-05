import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase/Firebase"
import { userRef } from "../../../firebase/Firebase"
import { addDoc } from "firebase/firestore"
import { ToastContainer, toast } from "react-toastify"


const auth = getAuth(app)


function Usign() {
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
                createUserWithEmailAndPassword(auth, email, Password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        localStorage.setItem("email", email)
                        localStorage.setItem("pass", Password)

                        setEmail("")
                        setCpassword("")
                        setPassword("")
                        setSpiner(false)
                        toast.success("Successfully created account...", {
                            position: "top-center",
                            autoClose: 2000,
                        })
                        addDoc(userRef, {
                            email: email,
                        })
                        setTimeout(() => {
                            navigate("/userlogin")
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

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div id="sign-in-button"></div>
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold mb-5 capitalize">SignIn form</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    if (e.target.value.length >= 30) {
                                        return alert("Only 30 charactes are allowed")
                                    }
                                    setEmail(e.target.value)
                                }}
                                type={"email"} pattern=".+@globex\.com" size="30" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                value={Password}
                                onChange={(e) => {
                                    if (e.target.value.length >= 16) {
                                        return alert("Less than 16 charaters are allowed")
                                    }
                                    setPassword(e.target.value)
                                }}
                                type={"password"} placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                value={Cpassword}
                                onChange={(e) => {
                                    if (e.target.value.length >= 16) {
                                        return alert("Less than 16 charaters are allowed")
                                    }
                                    setCpassword(e.target.value)
                                }}
                                type="password" placeholder="Confirm Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={registerUser}>{spiner ? <TailSpin color="white" height={30} /> : "Sign in"}</button>
                            <ToastContainer />
                        </div>
                        <div className="form-control mt-6">
                            <Link to={"/userlogin"}> <p className="cursor-pointer text-sm text-gray-600">Alredy User? go to login</p></Link>
                        </div>
                    </div>
                    {/* :
                            <div className="card-body">
                                <h1 className="text-2xl text-center font-bold mb-5 capitalize">SignIn form</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Verify OTP</span>
                                    </label>
                                    <input
                                        value={checkOTP}
                                        onChange={(e) => setCheckOTP(e.target.value)}
                                        type={"number"} pattern="{0-9}[10]" placeholder="Enter OTP" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">{spiner ? <TailSpin color="white" height={30} /> : "verify Otp"}</button>
                                    <ToastContainer />
                                </div>
                                <div className="form-control mt-6">
                                    <Link to={"/userlogin"}> <p className="cursor-pointer text-center text-sm text-gray-600">Go to login</p></Link>
                                </div>
                            </div> */}

                </div>
            </div>
        </div>
    )
}

export default Usign