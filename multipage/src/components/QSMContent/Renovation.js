import {Component} from "react"
import React from "react"

class Renovation extends Component {
    render() {
        return (
            <div style="backgroundColor:red">
                <h2> Service Rénovation</h2>
                <h3> Dans notre Service rénovation pour entreprises, nos techniciens sont là pour vous aider dans vos
                    travaux
                </h3>
                <ul>
                    <li>d'électricité</li>
                    <li>de Plomberie</li>
                    <li>de Démolition</li>
                    <li>de Maçonnerie</li>
                    <li>de Plafonnage</li>
                    <li>de Peinture</li>
                    <li>et de Menuiserie.
                    </li>
                </ul>
                <p> Pour tout renseignement ou un devis gratuit, n'hésitez pas à nous contacter par téléphone au 0800 11
                    112
                    ou par email à renovation@levillage1.be</p>
            </div>
        )
    }
}


export default Renovation;
