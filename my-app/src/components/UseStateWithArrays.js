import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }
    const removeNum = () => {
        setNums(
            nums.filter((item ,idx)=> {
                return idx !== nums.length -1;
            })
        )
    }
    const removeAll = () => {
        setNums(
             []
        )
    }
  return (
    <div>
        <button onClick={addNums}>Add item</button>
        <button onClick={removeNum}>Remove item</button>
        <button onClick={removeAll}>Remove all</button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays