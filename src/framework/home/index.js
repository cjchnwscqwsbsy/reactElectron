/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import { Layout } from 'antd';
import CarouselForImg from '../../component/index';
import HeaderPng from '../assets/123.jpeg';
import Test from '../assets/456.jpeg';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [HeaderPng, Test],
            img: {
                path: HeaderPng,
                key: 0
            }
        }
    }

    handleClick = (imgObj) => {
        if (imgObj.key === 0) {
            this.setState({
                img: {
                    path: Test,
                    key: 1
                }
            });
        } else {
            this.setState({
                img: {
                    path: HeaderPng,
                    key: 0
                }
            });
        }
    }

    render() {
        const { images, img } = this.state;
        return (
            <Layout className="main_layout">
                <Header className="header_style">
                    <CarouselForImg
                        images={images}
                        img={img}
                        changeImg={this.handleClick}
                    />
                </Header>
                <Content className="content_style">
                    <div>
                        34567890
                    </div>
                </Content>
                <Footer className="footer_style" />
            </Layout>
        );
    }
}

export default Home;