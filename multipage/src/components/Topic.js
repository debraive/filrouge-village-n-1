import React, {Component} from 'react';
import Renovation from "./ServicesEntrepriseContent/Renovation"
import Cleaning from "./ServicesEntrepriseContent/Cleaning";
import SubMenu from "./SubCategoriesMenus/SESubMenu";

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
            <div className="topic">
                <div className="submenu">
                    <SubMenu match={match}/>
                </div>
                <div>
                    {this.renderComponent(match.params.topicId, match)}
                </div>
            </div>
        )
    }
}

export default Topic;





