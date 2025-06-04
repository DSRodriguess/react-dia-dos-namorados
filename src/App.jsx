import React, { useState } from 'react';
import './App.css';
import Etapa1 from './components/etapas/Etapa1';
import Etapa2 from './components/etapas/Etapa2';
import Etapa3 from './components/etapas/Etapa3';
import Etapa4 from './components/etapas/Etapa4';
import Etapa5 from './components/etapas/Etapa5';
import Etapa6 from './components/etapas/EtapaFinal';
import useBotaoFujao from './hooks/useBotaoFujao';

function App() {
  const {
    pos: botaoPosicao,
    movendo: botaoMovendo,
    parado: botaoParado,
    botaoSimRef,
    botoesRef,
    iniciarMovimento,
    setParado,
    setPos
  } = useBotaoFujao();

  const [etapa, setEtapa] = useState(1);

  const handleSimMouseEnter = () => {
    iniciarMovimento();
  };

  const handleNao = () => {
    alert('Tudo bem... mas a curiosidade vai bater! 😜');
  };

  return (
    <div className="container">
      {etapa === 1 && (
        <Etapa1
          pos={botaoPosicao}
          movendo={botaoMovendo}
          parado={botaoParado}
          botaoSimRef={botaoSimRef}
          botoesRef={botoesRef}
          handleSimMouseEnter={handleSimMouseEnter}
          handleNao={handleNao}
          handleSimClick={() => {
            if (botaoParado) {
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
      {etapa === 6 && <Etapa6 />}
    </div>
  );
}

export default App;
