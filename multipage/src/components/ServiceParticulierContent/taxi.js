import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';

class Taxi extends Component {
    render() {
        return (<div>
                <h1>Taxi social</h1>
                <strong>
                    Le taxi social du Village n°1, la solution à vos problèmes de transport et d'accompagnement. Appelez
                    le 02/388.05.11
                </strong>
                <strong>
                    Services proposés:
                </strong>
                <ul>
                    <li>
                        Un service de transport dans un rayon de 30km autour de Braine-l'Alleud (excepté Bruxelles)
                    </li>
                    <li>
                        Un service d'accompagnement personnalisé
                    </li>
                </ul>
                <strong>
                    <ul>
                        <li>
                            le service est destiné en priorité aux personnes qui disposent d'un faible revenu, aux
                            personnes handicapées ou à mobilité réduite et aux plus de 65 ans
                        </li>
                        <li>
                            le tarif du transport est de 0,3595€ par km parcouru
                        </li>
                        <li>
                            inscription préalable
                        </li>
                        <li>
                            paiement par carte d'abonnement
                        </li>
                        <li>
                            numéro d'appel: 02/388 05 11
                        </li>
                        <li>
                            réservation 48h à l'avance
                        </li>
                    </ul>
                </strong>
                <p>
                    Cette initiative a abouti grâce à une collaboration étroite avec le CPAS de Braine-l'Alleud et la
                    commune de Braine-le-Château. Nous remercions également le Lions Club de Braine-l'Alleud et l'école
                    Peugeot de maîtrise automobile pour leur soutien dans ce projet.
                </p>
            </div>
        );
    }
}

export default Taxi;
const container = {
    maxWidth: '600px',
}

const imgContainer =
    {
        height: '337px',
        overflow: 'hidden'
    }

const imageStyle = {
    width: '120%',
    transform: 'translateX(-10%)',
    borderRadius: '3px'
}
