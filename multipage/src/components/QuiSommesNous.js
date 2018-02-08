import {Component} from "react"
import React from "react"
import TopicQSM from './TopicQSM';
import {
    Link,
    Route
} from 'react-router-dom'
import QSM from "./QSMContent/QSM";
import QSMMenu from "./CategoriesMenus/QSMMenu";


class QuiSommesNous extends Component {

    render() {
        const match = this.props.match;
        return (
            <div>
                <Route exact path={match.url} render={() => (
                    <div className="se_container">
                        <div className="img_container"/>
                        <div className="se_container">

                            <div className="right_menu">
                                <QSMMenu match={match}/>
                            </div>
                        </div>

                    </div>
                )}/>
                <Route path={`${match.url}/:topicId`} component={TopicQSM}/>
            </div>
        )
    }
}

export default QuiSommesNous;
