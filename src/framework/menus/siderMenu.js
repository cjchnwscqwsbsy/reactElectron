/**
 * Created by xrk on 17-11-23.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class SiderMenu extends React.Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/index">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SiderMenu;