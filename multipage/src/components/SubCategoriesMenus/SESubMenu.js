import {Component} from "react"
import React from "react"
import {Link} from 'react-router-dom'

const SubMenu = ({match}) => (
    <div>
        <ul><li><Link to={`/services-aux-entreprises/Activite_Industrielles`} replace>Activités industrielles
                </Link>
            </li>
            <li>
                <Link to={`/services-aux-entreprises/Installations`} replace>
                    Installations industrielles
                </Link>
            </li>
            <li>
                <Link to={`/services-aux-entreprises/Back_Office_Services`} replace>
                    Back Office Services
                </Link>
            </li>
            <li>
                <Link to={`/services-aux-entreprises/Renovation`} replace>
                    Rénovation
                </Link>
            </li>
            <li>
                <Link to={`/services-aux-entreprises/Cleaning`} replace>
                    Cleaning
                </Link>
            </li>
        </ul>
    </div>
)

export default SubMenu