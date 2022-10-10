import React from 'react'

function ConditionalRenderingFunction(props) {
  return (
    <div>
        <h1>
            {props.connected ? "Connected" : 'not Connected'}
        </h1>
    </div>
  )
}

export default ConditionalRenderingFunction