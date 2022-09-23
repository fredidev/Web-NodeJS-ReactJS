
import './App.css';
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-principal">     
      <main className="contador">      
        <h1 className="numero">{count}</h1>

        <div className="container-botao">
          <button className="botao" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
          <button className="botao" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </main>
    </div>
  );
}