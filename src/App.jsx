import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ImageSlider from './components/efeitos/ImageSlider';
import FallingHearts from './components/efeitos/FallingHearts';
import Etapa1 from './components/etapas/Etapa1';
import Etapa2 from './components/etapas/Etapa2';
import Etapa3 from './components/etapas/Etapa3';
import Etapa4 from './components/etapas/Etapa4';
import Etapa5 from './components/etapas/Etapa5';
import EtapaFinal from './components/etapas/EtapaFinal';

function App() {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [fugasRestantes, setFugasRestantes] = useState(5);
  const [movendo, setMovendo] = useState(false);
  const [parado, setParado] = useState(false);
  const botaoSimRef = useRef(null);
  const botoesRef = useRef(null);
  const [etapa, setEtapa] = useState(1);

  const iniciarMovimento = () => {
    if (!movendo && !parado) {
      setMovendo(true);
    }
  };

  useEffect(() => {
    if (movendo) {
      moverBotao();
    }
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
              setFugasRestantes(4);
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
      setParado(false);
      setPos({ top: 0, left: 0 });
    }
  };

  const handleNao = () => {
    alert('Tudo bem... mas a curiosidade vai bater! 😜');
  };

  return (
    <div className="container">
      {etapa === 1 && (
        <Etapa1
          pos={pos}
          movendo={movendo}
          parado={parado}
          botaoSimRef={botaoSimRef}
          botoesRef={botoesRef}
          handleSimMouseEnter={handleSimMouseEnter}
          handleNao={handleNao}
          handleSimClick={() => {
            if (parado) {
              setEtapa(2);
              setParado(false);
              setPos({ top: 0, left: 0 });
            }
          }}
        />
      )}

      {etapa === 2 && <Etapa2 setEtapa={setEtapa} />}

      {etapa === 3 && <Etapa3 setEtapa={setEtapa} />}

      {etapa === 4 && <Etapa4 setEtapa={setEtapa} />}

      {etapa === 5 && <Etapa5 setEtapa={setEtapa} />}

      {etapa === 6 && <EtapaFinal setEtapa={setEtapa} />}



    </div>
  );
}

export default App;
