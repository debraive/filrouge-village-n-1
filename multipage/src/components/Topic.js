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
            <div style={containerStyle}>
                <div style={subMenuStyle}>
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

const containerStyle = {
    display: 'flex',
    flexDirection: "row",
    margin: '0 auto',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '860px',
    lineHeight: "160%",
};


const subMenuStyle = {
    position: 'absolute',
    left: '-150px',
    top:'50vh',
    transform:'translateY(-50%)',
    width: '180px'
};

