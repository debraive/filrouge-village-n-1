import React, {Component} from 'react';
import QSM from "./QSMContent/QSM";
import Historique from "./QSMContent/Historique";
import Departements from "./QSMContent/Departements";
import Partenaires from "./QSMContent/Partenaires";
import Juridique from "./QSMContent/Juridique";
import Soutenir from "./QSMContent/Soutenir";
import QSMSubMenu from "./SubCategoriesMenus/QSMSubMenu";


class Topic extends Component {

    renderComponent(link) {
        switch (link) {
            case "Qui_Sommes_Nous":
                return <QSM/>;
            case "Historique":
                return <Historique/>;
            case "Départements":
                return <Departements/>;
            case "Partenaires":
                return <Partenaires/>;
            case "Entités_juridiques":
                return <Juridique/>;
            case "Nous_soutenir":
                return <Soutenir/>;
        }
    }


    render() {
        const match = this.props.match;
        return (
            <div className="topic">
                <div className="submenu">
                    <QSMSubMenu match={match}/>
                </div>
                <div>
                    {this.renderComponent(match.params.topicId, match)}
                </div>
            </div>
        )
    }
}

export default Topic;
