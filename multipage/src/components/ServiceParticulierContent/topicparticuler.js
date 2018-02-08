import React, {Component} from 'react';
import Renovation from "./renovation"
import Jardin from './jardin.js'
import MenuParti from './menu'
import Taxi from './taxi.js';
import Zone from './zone.js';

class TopicParticuler extends Component {

    renderComponent(link, match) {
        switch (link) {
            case "jardin":
                return <Jardin/>;
            case "renovation":
                return <Renovation />;
            case "taxi-social":
                return <Taxi />;
            case "Zones-desservies":
                return <Zone />;    
        }
    }


    render() {
        const match = this.props.match;
        return (
            <div className="topic">
                <div className="submenu">
                    <MenuParti match={match}/>
                </div>
                <div>
                    {this.renderComponent(match.params.topicId, match)}
                </div>
            </div>
        )
    }
}

export default TopicParticuler;


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
