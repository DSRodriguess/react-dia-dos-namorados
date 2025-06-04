// hooks/useBotaoFujao.js
import { useState, useRef, useEffect } from 'react';

export default function useBotaoFujao(initialFugas = 5) {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [fugasRestantes, setFugasRestantes] = useState(initialFugas);
  const [movendo, setMovendo] = useState(false);
  const [parado, setParado] = useState(false);
  const botaoSimRef = useRef(null);
  const botoesRef = useRef(null);

  useEffect(() => {
    if (movendo) moverBotao();
  }, [movendo]);

  const moverBotao = () => {
    if (botaoSimRef.current && botoesRef.current && fugasRestantes > 0) {
      const largura = botaoSimRef.current.offsetWidth;
      const altura = botaoSimRef.current.offsetHeight;
      const rect = botoesRef.current.getBoundingClientRect();

      const maxLeft = rect.width - largura - 10;
      const maxTop = rect.height - altura - 10;

      const left = Math.floor(Math.random() * maxLeft);
      const top = Math.floor(Math.random() * maxTop);

      setPos({ top, left });

      setFugasRestantes(prev => {
        const novo = prev - 1;
        if (novo === 0) {
          setTimeout(() => {
            setMovendo(false);
            setParado(true);
            setFugasRestantes(initialFugas - 1);
          }, 800);
        } else {
          setTimeout(moverBotao, 500);
        }
        return novo;
      });
    }
  };

  const iniciarMovimento = () => {
    if (!movendo && !parado) setMovendo(true);
  };

  return {
    pos,
    fugasRestantes,
    movendo,
    parado,
    botaoSimRef,
    botoesRef,
    iniciarMovimento,
    setParado,
    setPos
  };
}
