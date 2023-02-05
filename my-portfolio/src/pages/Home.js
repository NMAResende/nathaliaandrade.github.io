import React from 'react';
import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="containerHome">
       <div className="infoHome">
        <h1 className="oi">Oi</h1>
        <hr />
        <h1>Eu sou a <i>Nathália Andrade</i></h1>
        <h2>Estudante de Desenvolvimento Web pela Trybe</h2>
       </div> 
       <div className="image">
        <img 
        src={require('../image/nathalia.jpeg')} 
        alt="Minha foto sentada" 
        />
       </div>
      </div>
    );
  }
}

export default Home;