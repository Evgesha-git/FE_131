import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppContext } from "../..";
import { useNavigate } from "react-router";

const Login = () => {
    const { auth } = useContext(AppContext);
    const navigate = useNavigate();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const data = await signInWithPopup(auth, provider);
        console.log(data);
        navigate("/chat");
    };

    return (
        <div className="container">
            <button onClick={login}>Войти с помощью Google</button>
        </div>
    );
};

export default Login;
