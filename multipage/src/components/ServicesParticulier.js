import {Component} from "react";
import React from "react";
import {Route} from 'react-router-dom';
import TopicParticulier from './Topics/TopicParticulier.js';
import MenuParti from './CategoriesMenus/SPMenu'

class ServiceP extends Component {
    render() {
        var match = this.props.match;
        return (
            <div className="se_main_container">
                <Route exact path={match.url} render={() => (
                    <div className="se_container">
                        <div className="img_container"/>
                        <div className="right_menu">
                           <MenuParti match={match}/>
                        </div>
                    </div>
                )}/>
                <Route path={`${match.url}/:topicId`} component={TopicParticulier}/>
            </div>
        )
    }
}

export default ServiceP;

