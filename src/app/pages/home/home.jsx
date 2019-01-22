import React, { Component } from 'react';
import { Header, LeftNav} from '../../components/index';
import './home.less';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/actions';

@connect()
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.props.dispatch(addTodo('hello'));
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

function mapStateToProps(state,ownProps) {
    console.log(ownProps);
    // return state;
    return state;
  }
  