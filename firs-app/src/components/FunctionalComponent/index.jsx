import { useEffect, useState } from "react";
import style from "./FunctionalComponent.module.css";

const FunctionalComponent = (props) => {
    const [num, setNum] = useState(props.num);
    const [text, setText] = useState("");

    /**
     * OnClick
     * OnSubmit
     * ...
     */

    const clickHandler = (direction) => {
        if (direction) {
            setNum(num + 1);
        } else {
            setNum(num - 1);
        }
    };

    useEffect(() => {
        console.log("Функциональный компонент отрисован и перерисован");
        return () => console.log("Функциональный компонент удален");
    }, [num]);

    return (
        <div className={style.init}>
            <div>{num}</div>
            <button onClick={() => clickHandler(0)}>-</button>
            <button onClick={() => clickHandler(1)}>+</button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div>{text}</div>
        </div>
    );
};

export default FunctionalComponent;
