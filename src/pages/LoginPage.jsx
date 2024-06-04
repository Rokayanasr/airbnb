import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="mt-4 grow flex flex-col justify-around">
      <div className="mb-24">
          <h1 className="text-4xl text-center">Login</h1>
          <form className="flex flex-col max-w-md mx-auto mt-4">
              <input type="email" placeholder="your@gmail.com" />
              <input type="password" placeholder="password" />
              <button className="primary">Login</button>
              <div className="text-center text-gray-500">don&apos;t have an account yet? <Link to={'/register'} className="font-semibold text-black underline hover:text-primary">Register</Link></div>
          </form>
      </div>
    </div>
  );
}

export default LoginPage;
