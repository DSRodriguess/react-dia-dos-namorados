import React, { useEffect, useState } from 'react';

export default function EtapaTroll({ setEtapa }) {
  const [tempoRestante, setTempoRestante] = useState(10);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [resposta, setResposta] = useState('');
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (tempoRestante > 0 && !enviado) {
      const timer = setTimeout(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if ((tempoRestante === 0 || enviado) && !mostrarMensagem) {
      setMostrarMensagem(true);
      setTimeout(() => setEtapa(7), 4000);
    }
  }, [tempoRestante, enviado, mostrarMensagem, setEtapa]);

  const handleEnviar = () => {
    setEnviado(true);
  };

  return (
    <div className="etapa-troll">
      {!mostrarMensagem ? (
        <>
          <h1>🧠 Desafio Matemático!</h1>
          <p>
            Resolva a equação: <strong>(12x - 7) * (x² + 3x - 4) = ?</strong>
          </p>
          <p>Você tem <strong>{tempoRestante}</strong> segundos!</p>
          <input
            type="text"
            placeholder="Sua resposta"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            disabled={tempoRestante <= 0 || enviado}
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              marginTop: '1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '250px'
            }}
          />
          <br />
          <button
            onClick={handleEnviar}
            disabled={tempoRestante <= 0 || enviado}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              borderRadius: '8px',
              backgroundColor: '#f06292',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Enviar
          </button>
        </>
      ) : (
        <h2>😆 Era brincadeirinha! Relaxa, amor!</h2>
      )}
    </div>
  );
}
