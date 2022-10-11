import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

  handleLog = () => {
    this.setState((prevState) => ({
        isLoggedIn: !prevState.isLoggedIn
    }));
  }


    // handleSignIn = () => {
    //     this.setState({
    //         isLoggedIn: true,
    //     })
    //     console.log(this)
    // }

    // handleSingOut = () => {
    //     this.setState({
    //         isLoggedIn: false,
    //     })
    //     console.log(this)
    // }

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn}
                    handleLog={this.handleLog}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent