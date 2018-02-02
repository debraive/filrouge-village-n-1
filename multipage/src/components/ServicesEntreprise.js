import React, {Component} from "react"
import Topic from './Topic';
import {Route, Link} from 'react-router-dom'
import SEMenu from "./CategoriesMenus/SEMenu";


class ServiceE extends Component {

    render() {
        const match = this.props.match;
        return (
            <div>
                <Route exact path={match.url} render={() => (
                    <div>
                        <SEMenu match={match}/>
                        <h3 style={divStyle}>PERFORMANCE ÉCONOMIQUE ET ACTION SOCIALE</h3>
                        <p>Nos entreprises vous offrent des services compétitifs et personnalisés à grande échelle.
                            Travailler avec le Village n°1, c'est aussi faire un choix éthique.</p>
                    </div>
                )}/>
                <Route path={`${match.url}/:topicId`} component={Topic}/>
            </div>
        )
    }
}

const divStyle = {
    color:'red',
    border: '5px solid pink'
};

export default ServiceE;






