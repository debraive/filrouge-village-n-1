import React, {Component} from "react"


class Jardin extends Component{
  render() {
      return (
        <div>
          <h1>Jardins</h1>
          <div style={jard}>
              Le Village n°1 offre des services de proximité aux particuliers. Nos travailleurs sont formés pour prendre soin de vos maisons, textiles et jardins. Allégez vos tâches quotidiennes, confiez-les nous !
          </div>
        </div>

      )
  }
}
export default Jardin;
const jard={
  backgroundColor:'black'
}
