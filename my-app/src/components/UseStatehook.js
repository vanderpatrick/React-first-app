import React, { useState, useEffect } from 'react'

function UseStatehook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Count once")
        document.title = count;
    }, [count]);
    return (
        <div>
            <button onClick={() => {
                setCount(count => count + 1)
            }}>Increment count ({count}) </button>
        </div>
    )
}

export default UseStatehook