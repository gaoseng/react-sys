import React, { Component } from 'react';
import './user-manage.less';


@testable
export default class UserManagePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="user-manage">
                <p>user manage page</p>
                <p>user manage page</p>
            </div>
        );
    }
}

function testable(target) {
    target.isTestable = true;
  }
  