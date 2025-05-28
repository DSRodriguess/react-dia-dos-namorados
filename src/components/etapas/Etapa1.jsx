import React from 'react';

const Etapa1 = ({
  pos,
  movendo,
  parado,
  botaoSimRef,
  botoesRef,
  handleSimMouseEnter,
  handleNao,
  handleSimClick
}) => (
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
        onClick={handleSimClick}
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
);

export default Etapa1;
