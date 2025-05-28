import React from 'react';

export default function Etapa4({ setEtapa }) {
  return (
    <>
      <h1>Se você é realmente ela, preencha o pequeno formulário de 25 páginas abaixo:</h1>
      <form className="formulario" onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const sobrenome = form[1].value.trim().toLowerCase();
        const beleza = form[3].value.trim();

        if (sobrenome !== 'marinho de oliveira') {
          alert('Você errou o sobrenome... você realmente é ela? 🤨');
          return;
        }

        if (parseFloat(beleza) < 11) {
          alert('Nível de beleza abaixo de 10? Modéstia não é necessária aqui 😎\nOlhe seu nível de beleza correto!');
          form[3].value = '9999999999';
          return;
        }

        setEtapa(5);
      }}>
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Sobrenome" required />
        <input type="number" placeholder="Idade" min="1" max="120" required />
        <input type="number" placeholder="Nível de beleza (0 a 10)" min="0" max="9999999999" required />
        <button type="submit">Próxima página</button>
      </form>
    </>
  );
}


