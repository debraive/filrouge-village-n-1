import React, {Component} from 'react';
import Renovation from "../ServicesEntrepriseContent/Renovation"
import Cleaning from "../ServicesEntrepriseContent/Cleaning";
import SubMenu from "../SubCategoriesMenus/SESubMenu";

class Topic extends Component {

    renderComponent(link, match) {
        switch (link) {
            case "Renovation":
                return <Renovation />;
            case "Cleaning":
                return <Cleaning />;
            case "backOffice":
                return <Renovation />;
            case "horticulture":
                return <Renovation />;
        }
    }


    render() {
        const match = this.props.match;
        return (
            <div className="topic">
                <div className="submenu">
                    <SubMenu match={match}/>
                </div>
                <div style={{maxWidth:'600px'}}>
                    {this.renderComponent(match.params.topicId, match)}
                </div>
            </div>
        )
    }
}

export default Topic;
