import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState();
  
  // funções dos botões
  function somar() {
    setResultado(Number(num1) + Number(num2));
  }

  function subtrair() {
    setResultado(Number(num1) - Number(num2));
  }

  function multiplicar() {
    setResultado(Number(num1) * Number(num2));
  }

  function dividir() {
    if (Number(num2) === '0') {
      setResultado('Erro: Divisão por zero');
    } else {
      setResultado(Number(num1) / Number(num2));
    }
  }
  
  return (
    <div className="calculadora-container">
      <h1>Calculadora Simples</h1>

      {/* Inputs controlados com valor e onChange */}
      <input 
          type="number" 
          placeholder="Digite o primeiro número" 
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
      />

      <input
          type="number"
          placeholder="Digite o segundo número" 
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
      />

      {/* Botões que disparam as funções ao clicar */}
      <div className="botoes">
        <button onClick={somar}>Somar</button>
        <button onClick={subtrair}>Subtrair</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>
      <p><strong>Resultado: {resultado}</strong></p>
    </div>
  );
};

export default Calculadora;