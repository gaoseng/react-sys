import React from 'react';
import { echartPage } from '../app/pages';
import {  Route } from 'react-router-dom';

export default  () => (
    <div >
        <Route path="/work-bench/echart" component={echartPage} />
    </div>
);