import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { AppContext } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const { auth } = useContext(AppContext);
    const [user] = useAuthState(auth);

    return (
        <div className="navbar">
            <nav className="nav">
                {user ? (
                    <button className="button" onClick={() => signOut(auth)}>
                        Выйти
                    </button>
                ) : (
                    <button className="button">Войти</button>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
