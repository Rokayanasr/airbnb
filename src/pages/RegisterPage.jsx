import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
function RegisterPage() {
    const { register } = useAuth()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let handleRegister = async (event) => {
        event.preventDefault();
        register(name, email, password)
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className='mt-4 grow flex flex-col justify-around'>
            <div className='mb-24'>
                <h1 className='text-4xl text-center'>Register</h1>
                <form className='flex flex-col max-w-md mx-auto mt-4' onSubmit={handleRegister}>
                    <input type='text' placeholder='John Duo' value={name} onChange={(event) => setName(event.target.value)} />
                    <input type='email' placeholder='your@gmail.com' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button className='primary'>Register</button>
                    <div className='text-center text-gray-500'>
                        already registered?{" "}
                        <Link to={"/login"} className='font-semibold underline text-black hover:text-primary'>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
