import React, { useState } from 'react'

const Home = () => {
    const[allValue,setAllValue] = useState({counter: 0})
    const onChangeValue = () =>{
        let newValue = 0;
        newValue = allValue.counter + 1
        setAllValue({...allValue, counter: newValue})
    }
  return (
    <div>
        <h1>{allValue.counter}</h1>
        <button onClick={onChangeValue} >Increment</button>
    </div>
  )
}

export default Home