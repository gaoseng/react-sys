import React from 'react';
import { echart } from '../app/pages';
import {  Route } from 'react-router-dom';

export default  () => (
    <div >
        <Route path="/echart" component={echart} />
    </div>
);