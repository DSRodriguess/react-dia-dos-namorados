import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [fugasRestantes, setFugasRestantes] = useState(5);
  const [movendo, setMovendo] = useState(false);
  const [parado, setParado] = useState(false);
  const botaoSimRef = useRef(null);
  const botoesRef = useRef(null);

  const iniciarMovimento = () => {
    if (!movendo && !parado) {
      setMovendo(true);
    }
  };

  useEffect(() => {
    if (movendo) {
      moverBotao();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movendo]);

const moverBotao = () => {
  if (movendo && botaoSimRef.current && botoesRef.current) {
    if (fugasRestantes > 0) {
      const larguraBotao = botaoSimRef.current.offsetWidth;
      const alturaBotao = botaoSimRef.current.offsetHeight;
      
      const botoesRect = botoesRef.current.getBoundingClientRect();
      const margem = 10;

      const maxLeft = botoesRect.width - larguraBotao - margem;
      const maxTop = botoesRect.height - alturaBotao - margem;

      const top = Math.floor(Math.random() * maxTop);
      const left = Math.floor(Math.random() * maxLeft);

      setPos({ top, left });

      setFugasRestantes(prev => {
        const novoValor = prev - 1;

        if (novoValor === 0) {
          setTimeout(() => {
            setMovendo(false);
            setParado(true);
            setFugasRestantes(4); // resetar para próximo ciclo
          }, 800);
        } else {
          setTimeout(moverBotao, 500);
        }

        return novoValor;
      });
    }
  }
};


  const handleSimMouseEnter = () => {
    iniciarMovimento();
  };

  const handleSim = () => {
    if (parado) {
      alert('Aí sim! 💖 Agora vem a parte especial...');
      // Aqui você pode colocar o próximo passo, resetar ou navegar
      setParado(false);
      setPos({ top: 0, left: 0 });
    }
  };

  const handleNao = () => {
    alert('Tudo bem... mas a curiosidade vai bater! 😜');
  };

  return (
    <div className="container">
      <h1>
        Esse é um presente confidencial e exclusivo.<br />
        Tem certeza que deseja abrir?
      </h1>

      <div className="botoes" ref={botoesRef}>
        <button
          className="sim"
          ref={botaoSimRef}
          onMouseEnter={handleSimMouseEnter}
          onClick={handleSim}
          style={
            movendo || parado
              ? {
                  position: 'absolute',
                  top: pos.top,
                  left: pos.left,
                  zIndex: 20,
                }
              : {
                  position: 'relative',
                  top: 0,
                  left: 0,
                  zIndex: 5,
                }
          }
        >
          Sim
        </button>

        <button className="nao" onClick={handleNao}>
          Não
        </button>
      </div>
    </div>
  );
}

export default App;
