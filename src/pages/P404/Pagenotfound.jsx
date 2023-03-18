import { useNavigate } from "react-router-dom"

function Pagenotfound() {

    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-white-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Page Not Found</h1>
                    <p className="py-6">Oops... 404 Error occured </p>
                    <button className="btn btn-primary"
                        onClick={() => {
                            navigate("/")
                        }}
                    >Home</button>
                </div>
            </div>
        </div>
    )
}

export default Pagenotfound