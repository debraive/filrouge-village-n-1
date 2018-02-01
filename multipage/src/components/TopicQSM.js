import React, {Component} from 'react';
import Renovation from "./ServicesEntrepriseContent/Renovation"
import Historique from "./ServicesEntrepriseContent/Historique";

class Topic extends Component {

    renderComponent(link) {
        switch (link) {
            case "Historique":
                return <Historique/>;
            case "Départements":
                return <Départements/>;
            case "Partenaires":
                return <Partenaires/>;
            case "Entités juridiques":
                return <Entités juridiques/>;
            case "Nous soutenir":
                return <Nous soutenir/>;
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
