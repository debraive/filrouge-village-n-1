import React from 'react';
import QuiSommesNous from './components/QuiSommesNous';
import Accueil from "./components/Accueil";
import ServicesP from './components/ServicesParticulier';
import ServicesE from './components/ServicesEntreprise';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/qui-sommes-nous">Qui Sommes Nous</Link></li>
                <li><Link to="/services-aux-entreprises">Services Aux Entreprises</Link></li>
                <li><Link to="/services-aux-particuliers">Services Aux Particuliers</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Accueil}/>
            <Route path="/qui-sommes-nous" component={QuiSommesNous}/>
            <Route path="/services-aux-entreprises" component={ServicesE}/>
            <Route path="/services-aux-particuliers" component={ServicesP}/>
        </div>
    </Router>
);

export default App
