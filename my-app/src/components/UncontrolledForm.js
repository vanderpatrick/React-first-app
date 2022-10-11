import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputSelect = React.createRef();
      this.inputTextArea = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.inputName.current.value)
        console.log(this.inputSelect.current.value)
        console.log(this.inputTextArea.current.value)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <h2>Please fill in this form</h2>
            <label htmlFor='id-name'>Your name:</label>
            <input 
                   type="text"
                   name="name"
                   id="id-name"
                   defaultValue="jhon Doe"
                   ref={this.inputName}
                />
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select
                    id='id-category'
                    name='category'
                    ref={this.inputSelect}
                    >
                    <option value="website">Website issue</option>
                    <option value="order"> Order Issue</option>
                    <option value="general">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments: </label>
                <textarea
                    id='id-comments'
                    name="comments"
                    ref={this.inputTextArea}
                 />
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm