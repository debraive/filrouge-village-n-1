import React, {Component} from "react"
import Topic from './Topic';
import {Route} from 'react-router-dom'
import SEMenu from "./CategoriesMenus/SEMenu";


class ServiceE extends Component {

    render() {
        const match = this.props.match;
        return (
            <div className="se_main_container">
                <Route exact path={match.url} render={() => (
                    <div className="se_container">
                        <div className="img_container"/>
                        <div className="right_menu">
                            <SEMenu match={match}/>
                        </div>
                    </div>
                )}/>
                <Route path={`${match.url}/:topicId`} component={Topic}/>
            </div>
        )
    }
}

export default ServiceE;
