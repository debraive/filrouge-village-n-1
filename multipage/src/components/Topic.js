import React, {Component} from 'react';
import Renovation from "./ServicesEntrepriseContent/Renovation"
import Cleaning from "./ServicesEntrepriseContent/Cleaning";
import SubMenu from "./ServicesEntrepriseContent/SubMenu";

class Topic extends Component {

    renderComponent(link, match) {
        switch (link) {
            case "Renovation":
                return <Renovation match={match}/>;
            case "Cleaning":
                return <Cleaning match={match}/>;
            case "backOffice":
                return <Renovation match={match}/>;
            case "horticulture":
                return <Renovation match={match}/>;
        }
    }


    render() {
        const match = this.props.match;
        return (
            <div>
                <SubMenu match={match}/>
                {this.renderComponent(match.params.topicId, match)}
            </div>
        )
    }
}

export default Topic;



