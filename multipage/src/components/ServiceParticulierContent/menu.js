import React, {Component} from "react";
import {Route,Link,NavLink} from 'react-router-dom';

class MenuParti extends Component {
  constructor(props){
    super(props);
  }
  linksArray() {
      let match = this.props.match;
      let tab = [
          {url: '/services-aux-particuliers/jardin', title: 'Entretien de jardins'},
          {url: '/services-aux-particuliers/renovation', title: 'Service de rénovation'},
          {url: '/services-aux-particuliers/taxi-social', title: 'Taxi social'},
          {url: '/services-aux-particuliers/Zones-desservies', title: 'Zones desservies'}
      ];

      return (
          tab.map((e, i) => <li>
              <NavLink key={i} to={e.url} replace>{e.title} </NavLink></li>)
      )
  }
  render() {
    return (<div >
              <div >
              {this.linksArray()}
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
