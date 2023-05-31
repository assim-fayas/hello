import { useState } from "react";
import Counter from "./counter";

function App(){
  const [count,setCount] =  useState(0)
  const addCount =()=>{
    setCount(count+1)
  }
  let obj1 = {
    title : 'counter1',
    count,
    place :'newyork' //for rest opperater

  }
  let obj2 = {
    title : 'counter2',
    count
  }
  return (
    <div >
      <button onClick={addCount} >Add +</button>
    <Counter {...obj1} />
    <Counter {...obj2} />
    </div>
  )
}

export default App;

