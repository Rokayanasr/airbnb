import { useDispatch } from "react-redux";
import { loginUser, registerUser, logoutUser } from "../features/auth/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies  from "js-cookie";
function useAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const register = async (name, email, password) => {
        try {
            await axios.post("/register", { name, email, password });
            alert("registration successful now you can login");
            dispatch(registerUser(name, email));
        } catch (error) {
            alert("registration failed, please try again later" + error);
        }
    };

    const login = async (email, password) => {
        try {
            await axios.post("login", { email, password });
            const token = Cookies.get("token");
            dispatch(loginUser(email, token));
            alert("login successful");
            navigate("/");
        } catch (error) {
            alert("login failed, please try again later" + error);
        }
    };

    const logout = async () => {
        Cookies.remove("token");
        dispatch(logoutUser());
    };
    return register, login, logout;
}

export default useAuth;
