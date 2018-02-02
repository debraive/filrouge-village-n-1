import React, {Component} from "react";
import {Route,Link} from 'react-router-dom';

class MenuParti extends Component {
  constructor(props){
    super(props);
    if (this.props.background=="rouge") {
      this.state={background:rouge};
    }else{
      this.state={background:jaune};
    }
  }
  render() {
  return (<div style={this.props.style}>
              <Link to={this.props.match.url+"/jardin"}>Entretien de jardins</Link>
              <Link to={this.props.match.url+"/renovation"}>Service de rénovation</Link>
              <Link to={this.props.match.url+"/taxi-social"}>Taxi social</Link>
              <Link to={this.props.match.url+"/titres-services"}>titres-services</Link>
              <Link to={this.props.match.url+"/Zones desservies"}>Zones desservies</Link>
            </div>
            );
  }
}
export default MenuParti;
const jaune={
  backgroundColor:'yellow'
}
const rouge={
  backgroundColor:'red'
}
console.log(this.rouge);
