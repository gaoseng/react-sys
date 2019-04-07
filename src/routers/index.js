import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import { homePage, Login } from '../app/pages';
import { Header, LeftNav } from '../app/components';
import WorkBenchRoute from './work-bench-route';
import ManageCenterRoute from './manage-center-route';
import './configRoute.less';
import { getLocalStorageItem ,setLocolStorageItem} from '../config';


// console.log(WorkBenchRoute);
export default class RouterConfig extends Component {
    constructor (props) {
        super(props);
        setLocolStorageItem('first-router', ['/manage-center','/work-bench']);
    }

    render() {
        const routerFirst = getLocalStorageItem('first-router').split(',');
        // console.log('------------------');
        // console.log(routerFirst);
        return (
            <Router>
                {/* <Route path="/" component={homePage} /> */}
                
                
                <div className="root-container">
                    <Header />
                    <main className="root-main">
                        <LeftNav />
                        
                        <div className="root-pages">
                            <Route path="/" component={homePage} />
                            <Switch>
                                <Login path='/login' component={Login} exact />
                                <ManageCenterRoute path={routerFirst[0]}/>
                                <WorkBenchRoute path={routerFirst[1]}/>  
                                
                            </Switch>
                        </div>
                        
                    </main>
                </div>
            </Router>
        );
    }
}