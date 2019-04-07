import React from 'react';
import { userManagePage } from '../app/pages';
import {  Route } from 'react-router-dom';


export default ({computedMatch}) => {
    console.log(computedMatch);
    return (
        <div> 
            <Route path={`${computedMatch.path}/user-manage`} component={userManagePage} />
        </div>
    );
};