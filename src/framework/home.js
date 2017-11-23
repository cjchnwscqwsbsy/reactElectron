/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import Logo from './logo/index';
import SiderMenu from './menus/siderMenu';
import Test from './test/test';
import IndexTest from './test/index';
import './style/global.css';
const { Header, Sider, Content } = Layout;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <Logo />
                        <SiderMenu />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 510 }}>
                            <div>
                                <Route exact path="/" component={Test}/>
                                <Route path="/index" component={IndexTest}/>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Home;