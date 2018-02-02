import {Component} from "react"
import React from "react"
import {Link} from 'react-router-dom'

const SEMenu = ({match}) => (
    <div>
        <h2>Services Aux Entreprises</h2>
        <ul>
            <li>
                <Link
                    to={`${match.url}/Activite_Industrielles`} replace>
                    Activités industrielles
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/Installations`} replace>
                    Installations industrielles
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/Back_Office_Services`} replace>
                    Back Office Services
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/Renovation`} replace>
                    Rénovation
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/Cleaning`} replace>
                    Cleaning
                </Link>
            </li>
        </ul>
    </div>
)

export default SEMenu