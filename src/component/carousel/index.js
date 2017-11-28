/**
 * Created by xrk on 17-11-27.
 */
import React from 'react';
import CarouselImage from './carouselImage';
import CarouselNav from './carouselNav';
import ButtonGroup from './buttonGroup';
import './index.less';
import FENDAO from '../../framework/assets/feidao.png';
import JIUSHU from '../../framework/assets/jiushu.jpg';

class CarouselForImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: [FENDAO, JIUSHU],
            currentIndex: 0,
        };
        this.timer = null;
    }

    selectImage = (index) => {
        let len = this.state.imageSrc.length;
        this._updateIndex(index, len);
    }

    _updateIndex(index, len, delay=4000) {
        /* 清除定时器 */
        this.timer && clearInterval(this.timer);
        /* 设置当前展示图片 */
        this.setState({
            currentIndex: index
        });
        /* 打开定时器 */
        this.timer = setInterval(
            () => {
                var currentIndex = this.state.currentIndex;
                this.setState({
                    currentIndex: (currentIndex + 1) % len
                });
            },
            delay
        );
    }

    prevImage = () => {
        let currentIndex = this.state.currentIndex;
        let len = this.state.imageSrc.length;
        /* 计算下一张图片索引 */
        currentIndex = (currentIndex - 1) >= 0 ?
            (currentIndex - 1) % len : len - 1;
        /* 调用更新函数，更新当前显示的图片，并刷新定时器 */
        this._updateIndex(currentIndex, len);
    }

    nextImage = () => {
        let currentIndex = this.state.currentIndex;
        let len = this.state.imageSrc.length;
        /* 计算下一张图片索引 */
        currentIndex = (currentIndex + 1) % len;
        /* 调用更新函数，更新当前显示的图片，并刷新定时器 */
        this._updateIndex(currentIndex, len);
    }

    /**
     * 组件加载完毕后，图片自动播放
     */
    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.setState({
                    currentIndex: (this.state.currentIndex + 1) % 2
                });
            },
            5000
        );
    }

    /**
     * 组件卸载时，清理定时器
     */
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render () {
        const { imageSrc, currentIndex } = this.state;
        return (
            <div className="carousel">
                <CarouselImage
                    imageSrc={imageSrc}
                    currentIndex={currentIndex}
                    enterDelay={1500}
                    leaveDelay={1500}
                    component={"li"}
                    name={"carousel-image-item"}
                />
                <CarouselNav
                    carouselNavItems={imageSrc}
                    currentIndex={currentIndex}
                    selectImage={this.selectImage}
                />
                <ButtonGroup
                    prevImage={this.prevImage}
                    nextImage={this.nextImage}
                />
            </div>
        );
    }
}

export default CarouselForImg;