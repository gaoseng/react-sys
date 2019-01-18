import React, { Component } from 'react';
import { Header, LeftNav} from '../../components/index';
import './home.less';
import { Link, NavLink } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // console.log(Header);
        return (
            <div className="home">
                react
            </div>
        );
    }
}