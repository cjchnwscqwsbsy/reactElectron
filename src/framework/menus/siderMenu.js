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
                        <Icon type="home" style={{ fontSize: 16 }} />
                        <span>视频主页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/index">
                        <Icon type="video-camera" style={{ fontSize: 16 }} />
                        <span>视频分类</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/">
                        <Icon type="upload" style={{ fontSize: 16 }} />
                        <span>上传视频</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SiderMenu;