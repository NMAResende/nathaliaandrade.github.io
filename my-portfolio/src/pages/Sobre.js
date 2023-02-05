import React from 'react';

class Sobre extends React.Component {
  render() {
    return (
      <>
      <div>
        <h1 className="sobreMim">Sobre mim...</h1>
        <div className="text">
        <p>Meu nome é Natháia Andrade, tenho 30 anos, sou casada,
          mãe de uma menininha de 3 anos, amo cachorro, sou fisioterapeuta. </p>
        <p>Estou em transição de carreira para a área de programação.
        </p>
        <p>Comecei meu curso de Desenvolvimento web pela Trybe em Junho de 2022, 
          com conclusão em Junho de 2023</p>
        <p>Busco me aprimorar e melhorar cada vez mais meus estudos na área.</p>
        <p>Caso queria me conhecer melhor, segue abaixo minhas redes!</p>
        </div>
      </div> 
      </>
    );
  }
}

export default Sobre;