/**
 * Created by xrk on 17-11-21.
 */
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import test from './test';
import Home from './home';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/test" component={test}/>
                </div>
            </Router>
        );
    }
}

export default App;