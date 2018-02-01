import {Component} from "react"
import React from "react"
import Topic from './Topic';
import {
    Route,
    Link
} from 'react-router-dom'

class ServiceE extends Component {
    render() {
        const match = this.props.match;
        return (
            <div>
                <h2>Services Aux Particuliers</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/Activite_Industrielles`}>
                            Activités industrielles
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/Installations`}>
                            Installations industrielles
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/Back_Office_Services`}>
                            Back Office Services
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/Renovation`}>
                            Rénovation
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/Cleaning`}>
                            Cleaning
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <div>
                        <h3>PERFORMANCE ÉCONOMIQUE ET ACTION SOCIALE</h3>
                        <p>Nos entreprises vous offrent des services compétitifs et personnalisés à grande échelle.
                            Travailler avec le Village n°1, c'est aussi faire un choix éthique.</p>
                    </div>
                )}/>
            </div>
        )
    }
}

export default ServiceE;



