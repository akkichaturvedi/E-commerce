import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase/Firebase";
import { TailSpin } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

function Ulogin({ getLogindone }) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const auth = getAuth(app)
    const navigate = useNavigate()
    const [spiner, setSpiner] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const loginUser = () => {
        if (email.match(mailformat) && password) {
            setSpiner(true)
            try {
                setSpiner(true)
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;

                        setEmail("")
                        setPassword("")
                        toast.success("Successfully Loged In", {
                            position: "top-center",
                            autoClose: 2000,
                        })
                        setTimeout(() => {
                            navigate("/userlogin/home")
                        }, 2000);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        toast.error(errorCode, {
                            position: "top-center"
                        })
                    });
                setSpiner(false)
            } catch (error) {
                toast.error(error, {
                    position: "top-center"
                })
            }
            setSpiner(false)
        } else {
            toast.error("Invalid credential...", {
                position: "top-center"
            })
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold mb-5">Login form</h1>
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
                                type={"email"} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                value={password}
                                onChange={(e) => {
                                    if (e.target.value.length >= 16) {
                                        return alert("Less than 16 charaters are allowed")
                                    }
                                    setPassword(e.target.value)
                                }}
                                type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={loginUser}>{spiner ? <TailSpin color="white" height={30} /> : "Login"}</button>
                            <ToastContainer />
                        </div>
                        <div className="form-control mt-6">
                            <Link to={"/usersign"}> <p className="cursor-pointer text-sm text-gray-600">New User? register here</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ulogin