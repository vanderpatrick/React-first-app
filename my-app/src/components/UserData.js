import React from 'react'

function UserData(props) {
    return (
        <div><h1>{props.isLoaded ? "Data loaded" : "loading .... "}</h1></div>
    )
}

export default UserData