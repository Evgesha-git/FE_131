import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [title, setTitle] = useState("");
    const [minDesc, setMinDescr] = useState("");
    const [desc, setDesc] = useState("");
    const { data, loading, error, message } = useSelector(
        (state) => state.data
    );
    const { setData, logOut, editData, getData, removeItemData } = useAction();
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
        if (data?.products?.length ?? false) {
            editData("test", product);
        } else {
            setData("test", product);
        }
        // getData("test");
    };

    const exit = () => {
        logOut();
        navigate("/");
    };

    const remove = (id) => {
        const newData = data?.products.filter((item) => item.id !== id);
        removeItemData("test", newData);
        // getData("test");
    };

    useEffect(() => {
        getData("test");
    }, [message]);

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
            <div className="container">
                <p className="counter">
                    {data?.products?.length} - записей в БД
                </p>
                {data?.products?.map((item, i) => (
                    <div className="item" key={i.toString()}>
                        <h3 className="title">{item.title}</h3>
                        <p className="desc">{item.minDesc}</p>
                        <button onClick={() => remove(item.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
