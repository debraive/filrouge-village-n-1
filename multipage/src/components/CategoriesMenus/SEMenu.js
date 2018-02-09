import {Component} from "react"
import React from "react"
import {NavLink, NavNavLink} from 'react-router-dom'


class SEMenu extends Component {

    linksArray() {
        let match = this.props.match;
        let tab = [
            {url: 'Activite_Industrielles', title: 'Activités industrielles'},
            {url: 'Installations', title: 'Installations'},
            {url: 'Back_Office_Services', title: 'Back Office Service'},
            {url: 'Renovation', title: 'Renovation'},
            {url: 'Cleaning', title: 'Cleaning'}
        ];

        return (
            tab.map((e, i) => <li>
                <NavLink key={i}
                         to={`${match.url}/${e.url}`}
                         replace>{e.title} </NavLink></li>)
        )
    }

    render() {
        return (
            <div className="se_menu">
                <div className="category_title_container">
                    <div className="category_title_bg"/>
                    <h2 className="category_title">Services Aux Entreprise</h2>
                </div>
                <div className="text">
                    <p>Nos entreprises vous offrent des services compétitifs et personnalisés à grande
                        échelle.
                        Travailler avec le Village n°1, c'est aussi faire un choix éthique.</p>
                </div>
                <ul className="category_menu">
                    {this.linksArray()}
                </ul>
            </div>
        )
    }
}

export default SEMenu