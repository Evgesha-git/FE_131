import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [title, setTitle] = useState("");
    const [minDesc, setMinDescr] = useState("");
    const [desc, setDesc] = useState("");
    const { data, loading, error, message } = useSelector(
        (state) => state.data
    );
    const { setData, logOut, editData } = useAction();
    const navigate = useNavigate();

    console.log(data);

    const sendData = async (e) => {
        e.preventDefault();
        const product = {
            id: Date.now().toString(),
            title,
            minDesc,
            desc,
        };
        if (data?.products.length ?? false) {
            editData("test", product);
        } else {
            setData("test", product);
        }
    };

    const exit = () => {
        logOut();
        navigate("/");
    };

    return (
        <div className="container">
            <button onClick={exit}>Log Out</button>
            <form onSubmit={sendData}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea
                    onChange={(e) => setMinDescr(e.target.value)}
                    value={minDesc}
                ></textarea>
                <textarea
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                ></textarea>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AdminPage;
