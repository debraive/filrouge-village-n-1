import React, {Component} from "react"
import Topic from './Topic';
import {Route} from 'react-router-dom'
import SEMenu from "./CategoriesMenus/SEMenu";


class ServiceE extends Component {

    render() {
        const match = this.props.match;
        return (
            <div >
                <Route exact path={match.url} render={() => (
                    <div>
                        <div>
                            <SEMenu match={match}/>
                        </div>
                        <h3>PERFORMANCE ÉCONOMIQUE ET ACTION SOCIALE</h3>
                        <p>Nos entreprises vous offrent des services compétitifs et personnalisés à grande échelle.
                            Travailler avec le Village n°1, c'est aussi faire un choix éthique.</p>
                    </div>
                )}/>
                    <Route path={`${match.url}/:topicId`} component={Topic}/>
            </div>
        )
    }
}

const contentStyle = {
    backgroundColor: 'yellow'
};


export default ServiceE;






