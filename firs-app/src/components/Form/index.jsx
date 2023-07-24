import { useContext, useState } from "react";
import { ToDoContext } from "../../App";

const Form = () => {
    const [text, setText] = useState("");
    const { todo, setTodo } = useContext(ToDoContext);

    const getId = () => {
        let id = Math.floor(Math.random() * 100);
        if (todo.length === 0) return id;
        if (todo.some((t) => t.id === id)) getId();
        return id;
    };

    const addTodo = (event) => {
        event.preventDefault();
        const data = {
            // id: getId(), // todo === null || todo === void 0 ? todo : todo.length
            id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 0,
            text,
        };
        setTodo([...todo, data]);
        setText("");
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button type="submit">Add ToDo</button>
            </form>
        </div>
    );
};

export default Form;
