import React, {Component} from "react";
import {Route, Link, NavLink} from 'react-router-dom';

class MenuParti extends Component {
    constructor(props) {
        super(props);
    }

    linksArray() {
        let match = this.props.match;

        let tab = [
            {url: 'jardin', title: 'Entretien de jardins'},
            {url: 'renovation', title: 'Service de rénovation'},
            {url: 'taxi-social', title: 'Taxi social'},
            {url: 'Zones-desservies', title: 'Zones desservies'}
        ];

        return (
            tab.map((e, i) => <li>
                <NavLink key={i} to={`${match.url}/${e.url}`} replace>{e.title} </NavLink></li>)
        )
    }

    render() {
        return (
            <div className="se_menu">
                <div className="category_title_container">
                    <div className="category_title_bg"/>
                    <h2 className="category_title">Services Aux Particuliers</h2>
                </div>
                <div className="text">
                    <p>
                        Le Village n°1 offre des services de proximité aux particuliers. <br/>
                        Nos travailleurs sont formés pour prendre soin de vos maisons, textiles et jardins.<br/>
                        Allégez vos tâches quotidiennes, confiez-les nous !
                    </p>
                </div>
                <ul className="category_menu">
                    {this.linksArray()}
                </ul>
            </div>
        );
    }
}

export default MenuParti;
