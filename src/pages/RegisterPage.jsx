import { Link } from "react-router-dom"

function registerPage() {
    return (
        <div className="mt-4 grow flex flex-col justify-around">
            <div className="mb-24">
                    <h1 className="text-4xl text-center">Register</h1>
                    <form className="flex flex-col max-w-md mx-auto mt-4">
                        <input type="text" placeholder="John Duo" />
                        <input type="email" placeholder="your@gmail.com" />
                        <input type="password" placeholder="password" />
                        <button className="primary">Register</button>
                        <div className="text-center text-gray-500">already registered? <Link to={'/login'} className="font-semibold underline text-black hover:text-primary">Login</Link></div>
                    </form>
            </div>
        </div>
    )
}

export default registerPage