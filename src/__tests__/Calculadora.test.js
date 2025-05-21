import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculadora from '../components/Calculadora';

describe('Calculadora Simples', () => {
  test('Realiza uma soma corretamente', () => {
    render(<Calculadora />);

    // simula a digitação nos inputs
    const input1 = screen.getByPlaceholderText('Digite o primeiro número');
    const input2 = screen.getByPlaceholderText('Digite o segundo número');
    // simula o usuário digitando algo
    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '10' } });

    // simula o clique no botão soma
    const soma = screen.getByText('Somar'); // procura na tela
    fireEvent.click(soma); //

    // verifica o resultado esperado
    expect(screen.getByText('Resultado: 15')).toBeInTheDocument();
  })

  test('Realiza uma divisão corretamente', () => {
    render(<Calculadora />);

    fireEvent.change(screen.getByPlaceholderText('Digite o primeiro número'),
      { target: { value: '5' } });
    fireEvent.change(screen.getByPlaceholderText('Digite o segundo número'),
      { target: { value: '0' } });

      fireEvent.click(screen.getByText('Dividir'));

      expect(screen.getByText('Resultado: Erro: Divisão por zero')).toBeInTheDocument();
  
  })


  test('renderiza os inputs', () => {
    render(<Calculadora />); // simula a renderização do componente

    // procura o esperado
    expect(screen.getByPlaceholderText('Digite o primeiro número')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o segundo número')).toBeInTheDocument();
  });

  test('renderiza os botões', () => {
    render(<Calculadora />);
    
    expect(screen.getByText('Somar')).toBeInTheDocument();
    expect(screen.getByText('Subtrair')).toBeInTheDocument();
    expect(screen.getByText('Multiplicar')).toBeInTheDocument();
    expect(screen.getByText('Dividir')).toBeInTheDocument();
  });

  test('exibe o parágrafo de resultado', () => {
    render(<Calculadora />);
    expect(screen.getByText('Resultado:')).toBeInTheDocument();
  });
});
