import './App.css';
import { useState } from 'react';

function App() {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("+")

  const Middle = (type) => {
    if(type === "Add"){
      setOperation("+")
    }
    else if(type === "Subtract"){
      setOperation("-")
    }
    else if(type === "Multiply"){
      setOperation("x")
    }
    else{
      setOperation("%")
    }
  }

  return (
    <div className="App">

      <h1> Simple Math</h1>

     <input value={num1} onChange={(e) => {setNum1(e.target.value)}} className='inputs'/>
     <>{operation}</>
     <input value={num2} onChange={(e) => {setNum2(e.target.value)}} className='inputs'/>

     <select onChange={e => Middle(e.target.value)} className='selects'>
      <option value={"Add"}>Add</option>
      <option value={"Subtract"}>Subtract</option>
      <option value={"Multiply"}>Multiply</option>
      <option value={"Divide"}>Divide</option>
     </select>

    </div>
  );
}

export default App;
