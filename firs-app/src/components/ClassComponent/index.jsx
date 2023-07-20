import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            num: props.num,
            text: "",
        };
        this.inputHandler = this.inputHandler.bind(this);
    }

    clickHandler(direction) {
        if (direction) {
            this.setState({
                num: this.state.num + 1,
            });
        } else {
            this.setState({
                num: this.state.num - 1,
            });
        }
    }

    inputHandler(e) {
        const text = e.target.value;
        this.setState({ text });
    }

    componentDidMount() {
        console.log("Классовый компонент отрисован");
    }

    componentDidUpdate() {
        console.log("Классовый компонент перерисован");
    }

    componentWillUnmount() {
        console.log("Классовый компонент удален");
    }

    render() {
        const { text, num } = this.state;
        return (
            <div>
                <div>{num}</div>
                <button onClick={() => this.clickHandler(0)}>-</button>
                <button onClick={() => this.clickHandler(1)}>+</button>
                <input type="text" onChange={this.inputHandler} value={text} />
                <div>{text}</div>
            </div>
        );
    }
}

export default ClassComponent;
