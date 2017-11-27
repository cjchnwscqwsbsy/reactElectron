/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import { Layout } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderPng from '../assets/header.png';
const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <Layout className="main_layout">
                <Header className="header_style">
                    <ReactCSSTransitionGroup
                        transitionName="img_carousel"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                    >
                        <img src={HeaderPng} key={1}/>
                    </ReactCSSTransitionGroup>
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