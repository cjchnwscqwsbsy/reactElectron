/**
 * Created by xrk on 17-11-17.
 */
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Logo from './logo/index';
import SiderMenu from './menus/siderMenu';
import Home from './home/index';
import IndexTest from './test/index';
import './style/global.less';
const { Sider } = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    setCollapsed = value => {
        this.setState({
            collapsed: value
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
                        <Logo
                            collapsedBool={this.setCollapsed}
                        />
                        <SiderMenu />
                    </Sider>
                    <Route exact path="/" component={Home}/>
                    <Route path="/index" component={IndexTest}/>
                </Layout>
            </Router>
        );
    }
}

export default App;