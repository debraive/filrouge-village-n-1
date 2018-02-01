import {Component} from "react"
import React from "react"
import TopicQSM from './TopicQSM';
import {
    Route,
    Link
} from 'react-router-dom'

class QuiSommesNous extends Component {
  render() {
      const match = this.props.match;
      return (
          <div>
              <h2>Services Aux Particuliers</h2>
              <ul>
                  <li>
                      <Link to={`${match.url}/QSM`}>
                          Qui sommes nous?
                      </Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/Historique`}>
                          Historique
                      </Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/Départements`}>
                          Départements
                      </Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/Partenaires`}>
                          Partenaires
                      </Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/Entités juridiques`}>
                          Entités juridiques
                      </Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/Nous soutenir`}>
                          Nous soutenir
                      </Link>
                  </li>
              </ul>

              <Route path={`${match.url}/:topicId`} component={TopicQSM}/>
              <Route exact path={match.url} render={() => (
                  <div>

                  </div>
              )}/>
          </div>
      )
  }
}

export default QuiSommesNous;
