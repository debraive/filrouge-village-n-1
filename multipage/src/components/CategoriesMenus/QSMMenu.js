import {Component} from "react"
import React from "react"
import {NavLink, NavNavLink} from 'react-router-dom'


class QSMMenu extends Component {

    linksArray() {
        let match = this.props.match;
        let tab = [
            {url: 'Qui_Sommes_Nous', title: 'Qui Sommes Nous'},
            {url: 'Historique', title: 'Historique'},
            {url: 'Départements', title: 'Départements'},
            {url: 'Partenaires', title: 'Partenaires'},
            {url: 'Entités_juridiques', title: 'Entités_juridiques'},
            {url: 'Nous_soutenir', title: 'Nous_soutenir'}
        ];

        return (
            tab.map((e, i) => <li>
                <NavLink key={i} to={`${match.url}/${e.url}`} replace>{e.title} </NavLink></li>)
        )
    }

    render() {
        return (
            <div className="se_menu">
                <h2 className="category_title">Qui Sommes Nous ?</h2>
                <div className="text">
                    <p>Village n°1 Entreprises soutient les personnes en situation de handicap et/ou exclues du circuit
                        traditionnel du travail par la création d'emploi.</p>
                </div>
                <ul className="category_menu">
                    {this.linksArray()}
                </ul>
            </div>
        )
    }
}

export default QSMMenu