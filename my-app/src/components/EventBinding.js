import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         introduction: "Hello!",
         buttonText: "Exit",
      };
    }

    ClickHandler() {
        this.setState({
            introduction: "GoodBye!",
        });
        console.log(this.state.introduction)
    }
  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
        <button onClick={() => this.ClickHandler()}>
            {this.state.buttonText}
        </button>
      </div>
    )
  }
}

export default EventBinding