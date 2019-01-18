import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import {home} from '../app/pages';
import { Header, LeftNav } from '../app/components';
import WorkBenchRoute from './work-bench-route';
import './configRoute.less';




export default class RouterConfig extends Component {
    render() {
        return (
            <div className="root-container">
                <Header />
                <main className="root-main">
                    <LeftNav />
                    <Router>
                        <div className="root-pages">
                            <Route path="/" component={home} />
                            <Switch>
                                <WorkBenchRoute />
                                <Redirect to="/"></Redirect>
                            </Switch>
                        </div>
                    </Router>
                </main>
            </div>
        );
    }
}