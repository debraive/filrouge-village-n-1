import React, {Component} from 'react';
import QSM from "./QSMContent/QSM";
import Historique from "./QSMContent/Historique";
import Departements from "./QSMContent/Departements";
import Partenaires from "./QSMContent/Partenaires";
import Juridique from "./QSMContent/Juridique";
import Soutenir from "./QSMContent/Soutenir";


class Topic extends Component {

    renderComponent(link) {
        switch (link) {
            case "QSM":
                return <QSM/>;
            case "Historique":
                return <Historique/>;
            case "Départements":
                return <Departements/>;
            case "Partenaires":
                return <Partenaires/>;
            case "Entités juridiques":
                return <Juridique/>;
            case "Nous soutenir":
                return <Soutenir/>;
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
