/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import { Layout } from 'antd';
import CSSTransitionGroup from 'react-addons-css-transition-group';
const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    render() {
        return (
            <Layout className="main_layout">
                <Header className="header_style">
                    <span>VIDEO FOR FREE</span>
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