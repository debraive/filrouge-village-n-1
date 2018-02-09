import React, {Component} from "react";
import {Route, Link, NavLink} from 'react-router-dom';

class SubMenuParti extends Component {
    constructor(props) {
        super(props);
    }

    linksArray() {
        let tab = [
            {url: '/services-aux-particuliers/jardin', title: 'Entretien de jardins'},
            {url: '/services-aux-particuliers/renovation', title: 'Service de rénovation'},
            {url: '/services-aux-particuliers/taxi-social', title: 'Taxi social'},
            {url: '/services-aux-particuliers/Zones-desservies', title: 'Zones desservies'}
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
        );
    }
}

export default SubMenuParti;
