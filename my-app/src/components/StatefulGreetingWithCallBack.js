import React from 'react'


class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "GoodBye!!",
            buttonText: "Enter!"
        }, ()=>{
            console.log("new ", this.state.introduction);
            console.log("new ", this.state.buttonText);    
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting} {this.props.name} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting