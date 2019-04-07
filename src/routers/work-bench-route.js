import React from 'react';
import { echartPage } from '../app/pages';
import { Overview, Chatter, Editor} from '../app/pages/work-bench';
import {  Route } from 'react-router-dom';

export default  () => (
    <div >
        <Route path="/work-bench/overview" component={Overview} />
        <Route path="/work-bench/echart" component={echartPage} />
        <Route path="/work-bench/editor" component={Chatter} />
        <Route path="/work-bench/chatter" component={Editor} />
    </div>
);