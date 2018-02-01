import React, {Component} from 'react';
import Renovation from "./ServicesEntrepriseContent/Renovation"
import Cleaning from "./ServicesEntrepriseContent/Cleaning";

class Topic extends Component {

    renderComponent(link) {
        switch (link) {
            case "Renovation":
                return <Renovation/>;
            case "Cleaning":
                return <Cleaning/>;
            case "backOffice":
                return <Renovation/>;
            case "horticulture":
                return <Renovation/>;
        }
    }


    render() {
        const match = this.props.match;
        return (
            <div>
                {this.renderComponent(match.params.topicId)}
            </div>
        )
    }
}

export default Topic;



