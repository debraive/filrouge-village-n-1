import React, {Component} from "react";
import {Route,Link} from 'react-router-dom';
import MenuParti from './menu.js'

class Renovation extends Component {
  render(){
    return (<div style={containerStyle}>
                <MenuParti match={this.props.match}  />
                <div style={container}>
                  <h1 className="subtitle">Service de rénovation
                    <div className="underline"></div>
                  </h1>
                  <div>
                  Pour vos petits dépannages, nos techniciens sont là pour vous...
                  <ul>
                    Faites appel à nos services en :
                    <li>Electricité</li>
                    <li>Plomberie</li>
                    <li>Maçonnerie</li>
                    <li>Plafonnage</li>
                    <li>Menuiserie</li>
                    <li>Carrelage, dallage, pavage</li>
                    <li>Démolition</li>
                  </ul>
                  Demandez dès maintenant un devis gratuit au 0800 11 112 ou contactez-nous par email à renovation@levillage1.be
                  </div>
                </div>

            </div>)
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


const subMenuStyle = {
    position: 'absolute',
    left: '-150px',
    top:'50vh',
    transform:'translateY(-50%)',
    width: '180px'
};
export default Renovation;
