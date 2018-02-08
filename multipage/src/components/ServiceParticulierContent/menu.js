import React, {Component} from "react";
import {Route,Link} from 'react-router-dom';

class MenuParti extends Component {
  constructor(props){
    super(props);
  }
  render() {
  return (<div >
            <div style={subMenuStyle}>
              <Link to={this.props.match.url+"/jardin"}>Entretien de jardins</Link>
              <Link to={this.props.match.url+"/renovation"}>Service de rénovation</Link>
              <Link to={this.props.match.url+"/taxi-social"}>Taxi social</Link>
              <Link to={this.props.match.url+"/titres-services"}>titres-services</Link>
              <Link to={this.props.match.url+"/Zones-desservies"}>Zones desservies</Link>
            </div>
          </div>
            );
  }
}
const jaune={
  backgroundColor:'yellow'
}
const rouge={
  backgroundColor:'red'
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
export default MenuParti;
