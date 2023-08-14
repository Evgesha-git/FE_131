import React, { useState, useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import { routes } from "../../utils/routes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, loadin, error } = useSelector((store) => store.user);
    const { logInGoogle } = useAction();
    const location = useNavigate();

    const googleButton = () => {};

    console.log(user);

    useEffect(() => {
        if (user) {
            location(routes.admin);
        }
    }, [user]);

    return (
        <div className="container">
            <Link to={routes.main}>Вернуться на главную</Link>
            <div className="form">
                <form>
                    <input type="text" name="login" />
                    <input type="password" name="passwor" />
                    <button type="submit">Войти</button>
                </form>
            </div>
            <button onClick={logInGoogle}>Войти с помощью Google</button>
        </div>
    );
};

export default Login;
