import {Component} from "react"
import React from "react"
import {NavLink, NavNavLink} from 'react-router-dom'


const oddEvent = (match, location) => {
    console.log(this);
}

const SEMenu = ({match}) => (

    <div>
        <h2 className="category_title">Services Aux Entreprises</h2>
        <div className="text">
            <p>Nos entreprises vous offrent des services compétitifs et personnalisés à grande
                échelle.
                Travailler avec le Village n°1, c'est aussi faire un choix éthique.</p>
        </div>
        <ul className="category_menu">
            <li>
                <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to={`${match.url}/Activite_Industrielles`}
                         replace>
                    Activités industrielles
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to={`${match.url}/Installations`} replace>
                    Installations industrielles
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to={`${match.url}/Back_Office_Services`}
                         replace>
                    Back Office Services
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={{fontWeight: 'bold', color: 'red'}} to={`${match.url}/Renovation`} replace>
                    Rénovation
                </NavLink>
            </li>
            <li>
                <NavLink isActive={oddEvent} activeStyle={{fontWeight: 'bold', color: 'red'}}
                         to={`${match.url}/Cleaning`} replace>
                    Cleaning
                </NavLink>
            </li>
        </ul>
    </div>
)

export default SEMenu