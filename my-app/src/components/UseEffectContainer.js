import React, {useState} from 'react'
import UseEffectCounter from './UseEffectCounter'

function UseEffectContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => {
            setDisplay(!display)
        }}>
            display
        </button>
        {display && <UseEffectCounter />}
    </div>
  )
}

export default UseEffectContainer