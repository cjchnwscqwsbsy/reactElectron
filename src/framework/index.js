/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../components/test';

class Main extends React.Component {
    render() {
        return (
            <Test />
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);