import {Component} from "react"
import React from "react"
import {Route,Link} from 'react-router-dom'
import  Jardin from './ServiceParticulierContent/jardin.js'
import MenuParti from './ServiceParticulierContent/menu'
import Renovation from './ServiceParticulierContent/renovation.js';
import Taxi from './ServiceParticulierContent/taxi.js';
import Zone from './ServiceParticulierContent/zone.js';
class ServiceP extends Component {
    render() {
        return (
            <div>
                <p>Aux Particuliers</p>

                <Route exact path={this.props.match.url} component={()=>{
                    return (<div >
                            <div style={containerStyle}>
                              <h1 >Services aux Particuliers</h1>
                              <p>
                                Le Village n°1 offre des services de proximité aux particuliers. <br/>
                                Nos travailleurs sont formés pour prendre soin de vos maisons, textiles et jardins.<br/>
                                Allégez vos tâches quotidiennes, confiez-les nous !
                              </p>
                              <MenuParti  match={this.props.match} />
                            </div>
                            <img className={"sideImage"} href=""/>
                          </div>)
                }} />
                <Route exact path={this.props.match.url+"/jardin"} component={Jardin} />
                <Route exact path={this.props.match.url+"/renovation"} component={Renovation}/>
                <Route exact path={this.props.match.url+"/taxi-social"} component={Taxi}/>
                <Route exact path={this.props.match.url+"/Zones-desservies"} component={Zone}/>
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
