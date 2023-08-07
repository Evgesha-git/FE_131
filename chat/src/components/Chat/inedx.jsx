import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
    collection,
    query,
    addDoc,
    orderBy,
    serverTimestamp,
    Timestamp,
} from "firebase/firestore";

const Chat = () => {
    const { auth, firestore } = useContext(AppContext);
    const [user] = useAuthState(auth);
    const [text, setText] = useState("");
    const [messages, loading, error] = useCollectionData(
        query(collection(firestore, "messages"), orderBy("createAt"))
    );

    const sendMessage = async (e) => {
        e.preventDefault();

        await addDoc(collection(firestore, "messages"), {
            uid: user?.uid,
            displayname: user?.displayName,
            photoUrl: user?.photoURL,
            text,
            createAt: serverTimestamp(),
        });

        setText("");
    };

    return (
        <div className="container">
            <div className="chat">
                {messages?.map((message, i) => {
                    return (
                        <div
                            key={i.toString()}
                            style={{
                                border:
                                    user?.uid === message.uid
                                        ? "2px solid green"
                                        : "2px solid red",
                                display: "flex",
                                justifyContent:
                                    user?.uid === message.uid
                                        ? "flex-start"
                                        : "",
                            }}
                        >
                            <div className="avatar">
                                <img src={message.photoUrl} alt="" />
                            </div>
                            <div className="text">{message.text}</div>
                        </div>
                    );
                })}
            </div>
            <form onSubmit={sendMessage}>
                <textarea
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                ></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Chat;
