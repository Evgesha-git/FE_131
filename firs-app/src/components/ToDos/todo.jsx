import { useRef, useState } from "react";

const ToDo = (props) => {
    const textToDo = useRef(null);
    const [edit, setEdit] = useState(false);
    const { id, text, changeToDo, todo } = props;

    console.log(todo);

    const editToDo = () => {
        console.log(textToDo.current);
        if (edit) {
            setEdit(!edit);
            const newText = textToDo.current.innerText;
            const newTodo = todo.map((t) => {
                if (t.id === id) {
                    t.text = newText;
                    return t;
                }
                return t;
            });
            changeToDo(newTodo);
        } else {
            setEdit(!edit);
        }
    };

    const removeToDo = () => {
        const newTodo = todo.filter((t) => t.id !== id);
        changeToDo(newTodo);
    };

    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <p>{id + 1}</p>
            <p ref={textToDo} contentEditable={edit}>
                {text}
            </p>
            <div>
                <button onClick={editToDo}>{edit ? "Save" : "Edit"}</button>
                <button onClick={removeToDo}>Remove</button>
            </div>
        </li>
    );
};

export default ToDo;
