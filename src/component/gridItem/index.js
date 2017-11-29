/**
 * Created by xrk on 17-11-29.
 */
import React from 'react';
import ItemImg from './itemTest.jpg';

export default class GridItem extends React.Component {
    render() {
        return (
            <div>
                <img src={ItemImg} />
                <span>老人与海</span>
            </div>
        );
    }
}