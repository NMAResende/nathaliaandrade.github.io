import {
  faGithub, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
    <nav className='linkRotas'>
      <Link to="/">Home</Link>
      <Link to="/Sobre">Sobre</Link>
      <Link to="/Projetos">Projetos</Link>
    </nav>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  exact path="/sobre" component={ Sobre } />
        <Route  exact path="/projetos" component={ Projetos } />
      </Switch>
    </div>

    <h3 className="follow">Siga me</h3>
    <nav className="redes">
        <a href="https://github.com/NMAResende" className="git">
        <FontAwesomeIcon icon={faGithub} className="fas fa-code fa-3x"/>
        </a>
        <a href="https://www.linkedin.com/in/nathalia-marcia/" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} className="fas fa-code fa-3x"/>
        </a>
        <a href="https://www.instagram.com/nathy221/">
        <FontAwesomeIcon icon={faInstagram} className="fas fa-code fa-3x"/>
        </a>
    </nav>
    </>
  );
}

export default App;
