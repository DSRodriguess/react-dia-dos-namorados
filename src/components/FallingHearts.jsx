import React, { useEffect, useState } from 'react';
import './FallingHearts.css';

export default function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // posição horizontal
        size: Math.random() * 20 + 10 // tamanho entre 10px e 30px
      };
      setHearts((prev) => [...prev, newHeart]);

      // Remover corações após 5s
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`
          }}
        />
      ))}
    </>
  );
}
