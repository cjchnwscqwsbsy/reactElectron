/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';

class Main extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);