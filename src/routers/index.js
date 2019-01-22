import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import { homePage } from '../app/pages';
import { Header, LeftNav } from '../app/components';
import WorkBenchRoute from './work-bench-route';
import ManageCenterRoute from './manage-center-route';
import './configRoute.less';

// console.log(WorkBenchRoute);
export default class RouterConfig extends Component {
    render() {

        return (
            <Router>

                <div className="root-container">
                    <Header />
                    <main className="root-main">
                        <LeftNav />
                        
                        <div className="root-pages">
                            <Route path="/" component={homePage} />
                            <Switch>
                                <ManageCenterRoute path="/manage-center" />
                                <WorkBenchRoute path="/work-bench"/>  
                                {/* <Redirect path="/" to="/" /> */}
                            </Switch>
                        </div>
                        
                    </main>
                </div>
            </Router>
        );
    }
}