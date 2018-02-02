import {Component} from "react"
import React from "react"
import {Route,Link} from 'react-router-dom'
import  Jardin from './ServiceParticulierContent/jardin.js'
import MenuParti from './ServiceParticulierContent/menu'
import './ServiceParticulierContent/SP.css'
class ServiceP extends Component {
    render() {
        return (
            <div>
                <p>Aux Particuliers</p>

                <Route exact path={this.props.match.url} component={()=>{
                    return (<div>
                            <MenuParti className={"menuSide"} match={this.props.match} background={'rouge'} />
                            <div>
                              <h1 className={'titre'}>Services aux Particuliers</h1>
                              <p>
                                Le Village n°1 offre des services de proximité aux particuliers. <br/>
                                Nos travailleurs sont formés pour prendre soin de vos maisons, textiles et jardins.<br/>
                                Allégez vos tâches quotidiennes, confiez-les nous !
                              </p>

                            </div>
                            <img className={"sideImage"} href=""/>
                          </div>)
                }} />
                <Route path={this.props.match.url+"/jardin"} component={Jardin} />
                <Route path={this.props.match.url+"/renovation"} component={()=>{
                  return (<div>
                              <h1>Service de rénovation</h1>
                              <MenuParti match={this.props.match} background={'jaune'} />
                              <div>
                              ur vos petits dépannages, nos techniciens sont là pour vous...

                              Faites appel à nos services en :

                                  Electricité,
                                  Plomberie,
                                  Maçonnerie,
                                  Plafonnage,
                                  Peinture,
                                  Menuiserie,
                                  Carrelage, dallage, pavage,
                                  Démolition.

                              Demandez dès maintenant un devis gratuit au 0800 11 112 ou contactez-nous par email à renovation@levillage1.be
                              </div>
                          </div>);
                }}/>
            </div>

        )
    }
}

export default ServiceP;
