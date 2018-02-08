import {Component} from "react"
import React from "react"
import {NavLink} from 'react-router-dom'


class SEMenuu extends Component {

    linksArray() {
        let match = this.props.match;
        let tab = [
            {url: '/qui-sommes-nous/Qui_Sommes_Nous', title: 'Qui Sommes Nous'},
            {url: '/qui-sommes-nous/Historique', title: 'Historique'},
            {url: '/qui-sommes-nous/Départements', title: 'Départements'},
            {url: '/qui-sommes-nous/Partenaires', title: 'Partenaires'},
            {url: '/qui-sommes-nous/Entités_juridiques', title: 'Entités_juridiques'},
            {url: '/qui-sommes-nous/Nous_soutenir', title: 'Nous_soutenir'}
        ];

        return (
            tab.map((e, i) => <li>
                <NavLink key={i} to={e.url} replace>{e.title} </NavLink></li>)
        )
    }

    render() {
        return (
            <div className="se_menu">
                <ul className="category_menu">
                    {this.linksArray()}
                </ul>
            </div>
        )
    }
}

export default SEMenuu