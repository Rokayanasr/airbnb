import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(email, password);
        try {
            await axios.post("/login", { email, password });
           
        } catch (error) {
            
            console.log(error);
        }
    };

    useEffect(() => {
        if (Cookies.get("token")) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className='mt-4 grow flex flex-col justify-around'>
            <div className='mb-24'>
                <h1 className='text-4xl text-center'>Login</h1>
                <form onSubmit={handleLogin} className='flex flex-col max-w-md mx-auto mt-4'>
                    <input type='email' placeholder='your@gmail.com' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='password' />
                    <button className='primary'>Login</button>
                    <div className='text-center text-gray-500'>
                        don&apos;t have an account yet?{" "}
                        <Link to={"/register"} className='font-semibold text-black underline hover:text-primary'>
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
