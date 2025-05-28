import React from 'react';

export default function Etapa2({ setEtapa }) {
  return (
    <>
      <h1>Você é Marcelle Marinho de Oliveira?</h1>
      <div className="botoes">
        <button className="sim" onClick={() => setEtapa(3)}>
          Sim
        </button>
        <button className="nao" onClick={() => alert('Eita, temos um impostor então! 😂')}>
          Não
        </button>
      </div>
    </>
  );
}
