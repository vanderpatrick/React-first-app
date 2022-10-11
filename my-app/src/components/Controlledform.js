import React, { Component } from 'react'

export class Controlledform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        category: '',
        comments: ' '
      }
    }

    handlenamechange = (event) => {
        this.setState((prevState) => {
            return {
                name: prevState.name = event.target.value,
            }
        })
        
    }
    
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    // Or
    handleEvent = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <h2>Please fill in this form</h2>
            <label htmlFor='id-name'>Your name:</label>
            <input 
                value={this.state.name}
                   type="text"
                   name="name"
                   id="id-name"
                   onChange={this.handleEvent}
                />
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select id='id-category' onChange={this.handleEvent} value={this.state.category} name='category'>
                    <option value="website">Website issue</option>
                    <option value="order"> Order Issue</option>
                    <option value="general">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments: </label>
                <textarea id='id-comments' onChange={this.handleEvent} value={this.state.comments} name="comments" />
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Controlledform