import './App.css'
import React, {useState} from 'react';

function App() {
    const [data, setData] = useState({
    firstNumber: 0,
    secondNumber: 0,
    result: 0
    })
    
    const multiple = (e) => {
    e.preventDefault()
    setData(prev => ({...prev, result: prev.firstNumber * prev.secondNumber}))
    }
    
    return (
    <div className='container-principal'>
    <h1>Multiplicador de número</h1>
    <form onSubmit={multiple}>
    <input type="number" value={data.firstNumber}
    onChange={e => setData(prev => ({...prev, firstNumber: Number(e.target.value)}))}
    />
    <input type="number" value={data.secondNumber}
    onChange={ e => setData(prev => ({...prev, secondNumber: Number(e.target.value)}))}
    />
    <input type="submit"/>
    </form>
    <p>Resultado <span>{data.result}</span></p>
    </div>
    )
    }

    export default App