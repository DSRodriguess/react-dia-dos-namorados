import React from 'react';

export default function Etapa5({ setEtapa }) {
  return (
    <>
      <h1>Brincadeira, são apenas 2 páginas 😅</h1>
      <p>Ainda não estou convencido que você seja a Marcelle...<br />Preencha os dados abaixo:</p>
      <form className="formulario" onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const nomeNamorado = form[0].value.trim().toLowerCase();
        const desejaAbrir = form[2].value;

        if (nomeNamorado !== 'david') {
          alert('Errado! 😠 Esse não é o nome do seu namorado de verdade!');
          return;
        }

        if (desejaAbrir !== 'Sim') {
          alert('Você não quer abrir o seu presente ? 😢');
          return;
        }

        setEtapa(6);
        alert('Parabéns! Você é a Marcelle Marinho de Oliveira! 🎉\nAgora, vamos abrir o presente!');
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
  );
}

