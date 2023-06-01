import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    useEffect(()=>{
    console.log('mounting...');
    console.log('Updating...'+count);
    console.log('Updating2...'+count2);
   
    },[count]) //hear userEffect only works on count not in count2
    return (
    <div>
        <button onClick={()=>setCount(count+1)} >Add</button>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount2(count2+1)} >Add</button>
        <h1>count:{count}</h1>
    </div>
  )
}

export default Counter