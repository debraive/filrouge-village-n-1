import {Component} from "react"
import React from "react"

class Departements extends Component {
    render() {
        return (
            <div>
                <h2>Départements</h2>
                <h3>Direction :</h3>
                <ul>
                  <li>Direction Générale : Nathalie Claes</li>
                  <li>Direction Administrative & Financière : Frédéric Soupart</li>
                  <li>Direction Commerciale : Michèle Van Iersel</li>
                  <li>Direction des Opérations : Antoine Damiens</li>
                  <li>Direction des Ressources Humaines : Nathalie Claes</li>
                </ul>
                <h2>Département des Ressources Humaines :</h2>
                <ul>
                  <li>Relations contractuelles & sociales : Dominique Cuvelier</li>
                  <li>Développement RH & Communication : Anne Lemestré</li>
                </ul>
                <h2>Département Commercial :</h2>
                <ul>
                  <li>Service Commercial :</li>
                  <li>Activités Industrielles : Roland Gilliot</li>
                  <li>Back Office Services : Michèle Van Iersel</li>
                  <li>Cleaning : Betty Eeckhaut</li>
                  <li>Horticulture : Damien Iweins</li>
                  <li>Rénovation : Adrien Detelle</li>
                  <li>Service Administratif : Geneviève Palmieri - Samantha Merlo - Sylvia Volant</li>
                </ul>
            </div>
        )
    }
}

export default Departements;
