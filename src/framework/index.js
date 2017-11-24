/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

class Main extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);