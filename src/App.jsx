import React, { useState, useRef, useEffect } from 'react';
import './App.css';

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
        <>
          <h1>
            Esse é um presente confidencial e exclusivo.<br />
            Tem certeza que deseja abrir?
          </h1>
          <div className="botoes" ref={botoesRef}>
            <button
              className="sim"
              ref={botaoSimRef}
              onMouseEnter={handleSimMouseEnter}
              onClick={() => {
                if (parado) {
                  setEtapa(2);
                  setParado(false);
                  setPos({ top: 0, left: 0 });
                }
              }}
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
        </>
      )}

      {etapa === 2 && (
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
      )}

      {etapa === 3 && (
        <>
          <h1>Você tem certeza que seu nome é Marcelle Marinho de Oliveira?</h1>
          <div className="botoes">
            <button className="sim" onClick={() => setEtapa(4)}>
              Sim
            </button>

            <button className="nao" onClick={() => alert('Hmm... estranhou né? 🤭')}>
              Não
            </button>
          </div>
        </>
      )}

      {etapa === 4 && (
        <>
          <h1>
            Se você é realmente ela, preencha o pequeno formulário de 25 páginas abaixo:
          </h1>
          <form className="formulario" onSubmit={(e) => {
            e.preventDefault();

            const form = e.target;
            const nome = form[0].value.trim();
            const sobrenome = form[1].value.trim();
            const idade = form[2].value.trim();
            const belezaInput = form[3];
            const beleza = belezaInput.value.trim();

            if (sobrenome.toLowerCase() !== 'marinho de oliveira') {
              alert('Você errou o sobrenome... você realmente é ela? 🤨');
              return;
            }

            if (parseFloat(beleza) < 11) {
              alert('Nível de beleza abaixo de 10? Modéstia não é necessária aqui 😎\nOlhe seu nível de beleza correto!');
              belezaInput.value = '9999999999';
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
      )}

      {etapa === 5 && (
        <>
          <h1>Brincadeira, são apenas 2 páginas 😅</h1>
          <p>Ainda não estou convencido que você seja a Marcelle...<br />Preencha os dados abaixo:</p>

          <form className="formulario" onSubmit={(e) => {
            e.preventDefault();

            const form = e.target;
            const nomeNamorado = form[0].value.trim();
            const idadeNamorado = form[1].value.trim();
            const desejaAbrir = form[2].value;

            if (nomeNamorado.toLowerCase() !== 'david') {
              alert('Errado! 😠 Esse não é o nome do seu namorado de verdade!');
              return;
            }

            if (desejaAbrir !== 'Sim') {
              alert('Você não quer abrir o seu presente ? 😢');
              return;
            }

            alert('Parabéns! Você desbloqueou o presente secreto! 💝');
            // Redirecionar ou exibir proxima mensagem
          }}>
            <input type="text" placeholder="Nome do seu namorado" required />
            <input type="number" placeholder="Idade dele" required />

            <select required>
              <option value="">Você deseja realmente abrir esse presente?</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>

            <button type="submit">Finalizar</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
