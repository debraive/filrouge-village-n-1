import {Component} from "react"
import React from "react"
import {NavLink} from 'react-router-dom'



class SubMenu extends Component {

    linksArray() {
        let tab = [
            {url:'/services-aux-entreprises/Activite_Industrielles',title:'Activités industrielles'},
            {url:'/services-aux-entreprises/Installations',title:'Installations'},
            {url:'/services-aux-entreprises/Back_Office_Services',title:'Back Office Service'},
            {url:'/services-aux-entreprises/Renovation',title:'Renovation'},
            {url:'/services-aux-entreprises/Cleaning',title:'Cleaning'}
        ];

        return (
            tab.map(e => <li><NavLink to={e.url} replace>{e.title}</NavLink></li>)
        )
    }
    render() {
        return (
            <div className="content">
                <div className="bg"/>
                <ul>
                    {this.linksArray()}
                </ul>
            </div>
        )
    }
}

export default SubMenu