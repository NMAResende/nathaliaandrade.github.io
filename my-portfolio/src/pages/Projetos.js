import React from 'react';

class Projetos extends React.Component {
  render() {
    return (
      <>
      <div>
        <h1 className="projetos">Projetos realizados na Trybe</h1>
        <h2 className="projetos">Fundamentos</h2>
        <div className="pro">
        <a href="https://github.com/NMAResende/lessionsLearned" className="proTrybe">
          Projeto Lessions Learned
        </a> 
        <br/>
        <a href="https://github.com/NMAResende/playgroundFunctions" className="proTrybe">
        Projeto Playground Functions
        </a> 
        <br/>
        <a href="https://github.com/NMAResende/pixelsArt" className="proTrybe">
        Projeto Pixels Art
        </a> 
        <br/>
        <a href="https://github.com/NMAResende/jsUnitTest" className="proTrybe">
        Projeto JS Unit Test
        </a> 
        <br/>
        <a href="https://github.com/NMAResende/zooFunctions" className="proTrybe">
        Projeto Zoo Functions
        </a>
        <br/>
        </div>
        <div className="pro">
        <h2 className="projetos">Front-end</h2>
        <a href="https://github.com/NMAResende/shoppingCart" className="proTrybe">
        Projeto Shopping Cart
        </a>
        <br/>
        <a href="https://github.com/NMAResende/solarSystem" className="proTrybe">
        Projeto Solar System
        </a>
        <br/>
        <a href="https://github.com/NMAResende/tryunfo" className="proTrybe">
        Projeto Tryunfo
        </a>
        <br/>
        <a href="https://github.com/NMAResende/trybeTunes" className="proTrybe">
        Projeto Trybetunes
        </a>
        <br/>
        <a href="https://github.com/NMAResende/TesteReact" className="proTrybe">
        Projeto Testes React
        </a>
        <br/>
        <a href="https://github.com/NMAResende/trybeWallet" className="proTrybe">
        Projeto Trybe Wallet
        </a>
        <br/>
        <a href="https://github.com/NMAResende/starwarsPlanet" className="proTrybe">
        Projeto Starwars Planet
        </a>
        </div>
      </div> 
      </>
    );
  }
}

export default Projetos;