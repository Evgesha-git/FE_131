import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import { AppContext } from "../..";
import Chat from "../Chat/inedx";

const AppRouter = () => {
    const { auth } = useContext(AppContext);
    const [user] = useAuthState(auth);
    return user ? (
        <Routes>
            <Route path="/chat" element={<Chat />} />
        </Routes>
    ) : (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRouter;
