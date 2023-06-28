import './App.css';
import { useState } from 'react';

function App() {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("+")
  const [mathType, setMathType] = useState("Add")
  const [answer, setAnswer] = useState(null)

  const GetAnswer = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstNumber: parseInt(num1),
        secondNumber: parseInt(num2),
        mathType: mathType
      })
    }
    await fetch('api/create-nums', requestOptions).then(res => res.json()).then(data => setAnswer(data.answer))
  }

  const Middle = (type) => {
    if (type === "Add") {
      setOperation("+")
      setMathType("Add")
    }
    else if (type === "Subtract") {
      setOperation("-")
      setMathType("Subtract")
    }
    else if (type === "Multiply") {
      setOperation("x")
      setMathType("Multiply")
    }
    else {
      setOperation("%")
      setMathType("Divide")
    }
  }

  return (
    <div className="App">

      <h1> Simple Math</h1>

      <input value={num1} onChange={(e) => { setNum1(e.target.value) }} className='inputs' />
      <>{operation}</>
      <input value={num2} onChange={(e) => { setNum2(e.target.value) }} className='inputs' />

      <select onChange={e => Middle(e.target.value)} className='selects'>
        <option value={"Add"}>Add</option>
        <option value={"Subtract"}>Subtract</option>
        <option value={"Multiply"}>Multiply</option>
        <option value={"Divide"}>Divide</option>
      </select>

      <div className='btnContainer'>
        <button className='btn' onClick={() => GetAnswer()}>Sovle</button>
      </div>

      {answer !== null ? <div className='ans'>ANSWER = {answer}</div> : <></>}

    </div>
  );
}

export default App;
