import {Component} from "react"
import React from "react"

class Juridique extends Component {
    render() {
        return (
            <div>
              <h2>Entités Juridiques</h2>
              <p>L’organisation juridique du Village n°1 ENTREPRISES est subdivisée en plusieurs entités : une associations sans but lucratif et trois sociétés anonymes à finalité sociale. Chaque entité a ses spécificités mais elles travaillent toutes à des objectifs similaires et convergents.
              <br/>
              Village n°1 ENTREPRISES est une organisation unique qui défend des valeurs communes et assure des missions homogènes.</p>
              <h3>Une ASBL</h3>
              <ul>
                <li>
                ETA Village n°1 asbl
                L'asbl ETA Village n°1 a pour objets l'occupation, la formation et la mise au travail de personnes adultes ayant un handicap reconnu par un pouvoir subsidiant et de personnes en difficultés d’intégration.
                </li>
              </ul>
              <h3>Les safs</h3>
              <p>Les sociétés anonymes à finalité sociale ont pour objectif l’insertion des personnes handicapées ou socialement défavorisées, par la création d’emplois stables et rémunérés et par l’organisation éventuelle des formations nécessaires.
              La société vise la réinsertion sociale et professionnelle de personnes exclues des circuits traditionnels de l’emploi et est active dans la lutte contre le chômage ou toute autre forme d’exclusion.
              L’objectif prioritaire des safs est la création d’emploi durable, de qualité, et rémunérateur.
              Les safs de Village n°1 ENTREPRISES: ADM Village n°1, Bteam Village n°1, Proxi Village n°1.</p>
            </div>
        )
    }
}

export default Juridique;
