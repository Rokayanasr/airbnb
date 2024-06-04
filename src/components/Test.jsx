import { useState } from "react"

//rendering the same component more than one time each will have its own state
export default function Test() {
    return (
        <div className='text-center mt-8'>
            <h1 className='text-2xl font-bold'>Test</h1>
            <MyButton/>
            <MyButton/>
            <MyButton/>
        </div>
    )
}

function MyButton () {
    let [count, setCount] = useState(0);
    let handleClick = () => {
        setCount(++count)
    }
    return(
        <button className="bg-blue-500 p-2 rounded" onClick={handleClick} >{count}</button>
    )
}