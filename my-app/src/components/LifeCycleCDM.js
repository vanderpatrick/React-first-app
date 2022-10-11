import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCycleCDM extends Component {
    constructor(props) {
        console.log("constructor called")
      super(props)
    
      this.state = {
         data: "Loading...."
      }
    }

    getData() {
        console.log("getData() called")
        setTimeout(() => {
            console.log("data fetched")
            this.setState({
                data: "loaded!"
            })
        }, 5000)
    }

    componentDidMount() {
        console.log("Component mounted")
        this.getData()
    }

  render() {
    console.log("remder Method called")
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild />
      </div>
    )
  }
}

export default LifeCycleCDM