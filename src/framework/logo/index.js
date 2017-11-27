/**
 * Created by xrk on 17-11-23.
 */
import React from 'react';
import { Icon } from 'antd';
import './logo.less';
class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        this.props.collapsedBool && this.props.collapsedBool(this.state.collapsed);
    }

    render() {
        return (
            <div className="menuTitle">
                <div className="logo"/>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </div>
        );
    }
}

export default Logo;