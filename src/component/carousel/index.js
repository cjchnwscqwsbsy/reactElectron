/**
 * Created by xrk on 17-11-27.
 */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CarouselForImg extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = () => {
        this.props.changeImg(this.props.img);
    }

    render () {
        const { images, img } = this.props;
        return (
            <ReactCSSTransitionGroup
                transitionName="img_carousel"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
                <img src={img.path} key={img.key} onClick={this.handleChange}/>
            </ReactCSSTransitionGroup>
        );
    }
}

export default CarouselForImg;