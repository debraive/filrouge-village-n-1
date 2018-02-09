import React, {Component} from "react"
import MenuParti from '../CategoriesMenus/SPMenu.js'


class Jardin extends Component{
  render() {
      return (
        <div style={containerStyle}>
          <div style={container}>
          <h1>Jardins</h1>
          <div >
              Le Village n°1 offre des services de proximité aux particuliers.
              Nos travailleurs sont formés pour prendre soin de vos maisons, textiles et jardins.
              Allégez vos tâches quotidiennes, confiez-les nous !
              <ul>
                Services proposés :
                <li>Tonte, gazon en rouleau,</li>
                <li>Débroussaillage,</li>
                <li>Enlèvement des déchets de jardin,</li>
                <li>Elagage, abattage,</li>
                <li>Semis de pelouse,</li>
                <li>Plantations de haie, plantations,</li>
                <li>Création de jardins.</li>
              </ul>
              Notre équipement
              <ul>
              <li>
            		<div class="clear"></div>
            		<strong>Tracteurs</strong><br/>
            		&nbsp;</li>
            </ul>
            <p>
            	1 tracteur John Deere 2250 avec bras de chargement Faucheux F3&nbsp;<br/>
            	1 tracteur Ford 4600<br/>
            	&nbsp; </p>
            <ul>
            	<li>
            		<strong>Petits tracteurs </strong><br/>
            		&nbsp;</li>
            </ul>
            <p style={{textAlign: 'justify'}}>
            	1 tracteur Iséki TH 4330&nbsp;<br/>
            	1 tracteur tondeuse Iséki SXG 19<br/>
            	1 tracteur tondeuse Iséki SXG 22 · 1 tracteur tondeuse Iséki SF333<br/>
            	&nbsp;</p>
            <ul>
            	<li>
            		<strong>Accessoires de tracteurs&nbsp; </strong><br/>
            		&nbsp;</li>
            </ul>
            <p style={{textAlign: 'justify'}}>
            	1 tondeuse fléau Vandaele · 1 semoir gazon Amazone · 1 tondobalai Amazone type GHL720 · 1 broyeur de branche Vandaele TV120 · 1 herse rotative 2,5 m Lely · 1 herse 2,8 m The Tripple K · 1 rouleau pierre bleue 2,2 m · 1 rotavator (fraise) Maschia<br/>
            	&nbsp;</p>
            <ul>
            	<li>
            		<strong>Tondeuses </strong></li>
            </ul>
            <p>
            	10 tondeuses Hydro HRH 536<br/>
            	&nbsp;</p>
            <ul>
            	<li>
            		<strong>Tronçonneuses, </strong><strong>souffleurs, </strong><strong>débroussailleuses et taille-haies </strong></li>
            </ul>
            <p style={{textAlign: 'justify'}}>
            	6 tailles haies HS80/81R<br/>
            	1 taille haie sur perche HL 100K&nbsp;<br/>
            	2 tronçonneuses Solo 603K60<br/>
            	3 tronçonneuses MS200<br/>
            	3 tronçonneuses MS260 · 3 kits taille-haies Sthil · 8 débroussailleuses Sthil FS 480 · 4 souffleurs 3 R 550 · 1 souffleur 600 · 1 souffleur 420 · 1 déssoucheuse B13-80 JO-beau<br/>
            	&nbsp;</p>
            <ul>
            	<li>
            		<strong>Véhicules et accessoires </strong><br/>
            		&nbsp;</li>
            </ul>
            <p style={{textAlign: 'justify'}}>
            	2 remorques Anssens · 1 remorque Broos · 1 camionnette Nissan Cabstar 2 camionnettes : Volkswagen LT, Volkswagen CRAFTER<br/>
            	&nbsp;</p>
            <ul>
            	<li>
            		<strong>Divers </strong><br/>
            		&nbsp;</li>
            </ul>
            <p style={{textAlign: 'justify'}}>
            	2 pulvérisateurs 15 L Solo<br/>
            	1 pulvérisateur 5 L Solo<br/>
            	1 pulvérisateur sur brouette<br/>
            	1 compresseur Honda EX800<br/>
            	1 gravely 5645<br/>
            	1 élévateur chenille de 12 à 30 m</p>
            </div>
          </div>
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


const subMenuStyle = {
    position: 'absolute',
    left: '-150px',
    top:'50vh',
    transform:'translateY(-50%)',
    width: '180px'
};
export default Jardin;
