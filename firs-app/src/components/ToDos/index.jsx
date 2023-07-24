import { useContext } from "react";
import { ToDoContext } from "../../App";
import ToDo from "./todo";

const ToDos = () => {
    const { todo, setTodo } = useContext(ToDoContext);

    return (
        <div>
            {todo.length ? (
                <ul>
                    {todo.map((t, i) => (
                        <ToDo
                            key={i.toString()}
                            id={t.id}
                            text={t.text}
                            changeToDo={setTodo}
                            todo={todo}
                        />
                    ))}
                </ul>
            ) : (
                <h2>Список задач пуст</h2>
            )}
        </div>
    );
};

export default ToDos;
