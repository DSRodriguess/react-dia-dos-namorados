import React from 'react';

export default function Etapa3({ setEtapa }) {
  return (
    <>
      <h1>Você tem certeza que seu nome é Marcelle Marinho de Oliveira?</h1>
      <div className="botoes">
        <button className="sim" onClick={() => setEtapa(4)}>Sim</button>
        <button className="nao" onClick={() => alert('Hmm... estranhou né? 🤭')}>Não</button>
      </div>
    </>
  );
}

