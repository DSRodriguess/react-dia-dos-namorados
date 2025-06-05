import FallingHearts from '../efeitos/FallingHearts';
import ImageSlider from '../efeitos/ImageSlider';

export default function EtapaFinal() {
  return (
    <div className="etapa-final">
      <FallingHearts />
      <h1> 💝 Surpresa! 💝</h1>
      <p>Essas são apenas algumas das nossas memórias juntos...<br />Te amo muito! 💖</p>
      <ImageSlider />
      <div className="mensagem-final">
        <h2>Amor</h2>
        <p>
          Desde o dia em que nos reencontramos e demos o nosso primeiro beijo naquele carnaval mágico, minha vida se encheu de cor, sorrisos e momentos inesquecíveis. <br />
          Cada foto aqui é uma lembrança do quanto você é especial pra mim. <br />
          Obrigado por ser essa mulher incrível, por me inspirar todos os dias e por estar comigo. <br />
          Eu te lobo.<br />
          Eu te amo infinitamente! 💘
        </p>

      </div>
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/lp-EO5I60KA?autoplay=1&loop=1&playlist=lp-EO5I60KA"
        title="Música romântica"
        frameBorder="0"
        allow="autoplay"
      />
    </div>
  );
}
