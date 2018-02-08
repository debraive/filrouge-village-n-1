import React, {Component} from "react";
import {Route,Link} from 'react-router-dom';

class Zone extends Component {
  render(){return (
      <div>
        <h1>Zones desservies</h1>
        <p>Nos services d'entretien de jardins et d'aide au ménage vous sont proposés dans les communes de Braine-l'Alleud, Braine-le-Château, Nivelles, Ittre, Waterloo, Genappe et les communes avoisinantes.</p>
        <p> Voici la carte qui reprend l'ensemble des communes que nous desservons:</p>
      </div>
  )};
}

export default Zone ;

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
