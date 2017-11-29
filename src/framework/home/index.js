/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import { Layout } from 'antd';
import { CarouselForImg, TabSwitch } from '../../component/index';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {

    render() {
        return (
            <Layout className="main_layout">
                <Header className="header_style">

                </Header>
                <Content className="content_style">
                    <div>
                        <CarouselForImg />
                        <TabSwitch />
                    </div>
                </Content>
                <Footer className="footer_style" />
            </Layout>
        );
    }
}

export default Home;