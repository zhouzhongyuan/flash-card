import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { List, Quiz, Add } from './component';
import './index.css';
import App from './App';

injectTapEventPlugin();
ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={List} />
            <Route path="list" component={List} />
            <Route path="add" component={Add} />
            <Route path="quiz" component={Quiz} />
        </Route>
    </Router>,
    document.getElementById('root'),
);
