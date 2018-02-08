import {Component} from "react";
import React from "react";
import {Route,Link} from 'react-router-dom';
import TopicParticuler from './ServiceParticulierContent/topicparticuler.js';
import MenuParti from './ServiceParticulierContent/menu'

class ServiceP extends Component {
    render() {
        var match = this.props.match
        return (
            <div>
                <Route exact path={this.props.match.url} component={()=>{
                    return (<div className="se_menu">
                            <div className="se_container">
                                <div className="img_container"/>
                                <div className="right_menu se_menu">
                                    <h2 className="category_title">Services aux Particuliers</h2>
                                    <p className="text">
                                      Le Village n°1 offre des services de proximité aux particuliers. <br/>
                                      Nos travailleurs sont formés pour prendre soin de vos maisons, textiles et jardins.<br/>
                                      Allégez vos tâches quotidiennes, confiez-les nous !
                                    </p>
                                  <div className="category_menu">
                                  <MenuParti  match={this.props.match} />
                                  </div>
                                </div>
                            </div>
                          </div>)
                }} />
                <Route path={`${match.url}/:topicId`} component={TopicParticuler}/>
            </div>

        )
    }
}
const container = {
    maxWidth:'600px',
}

const imgContainer =
{
    height:'337px',
    overflow:'hidden'
}

const imageStyle = {
    width: '120%',
    transform: 'translateX(-10%)',
    borderRadius: '3px'
}
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
export default ServiceP;
