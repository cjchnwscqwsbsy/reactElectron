/**
 * Created by xrk on 17-11-29.
 */
import React from 'react';
import { Tabs } from 'antd';
import GridItem from '../gridItem/index';

const TabPane = Tabs.TabPane;

export default class TabSwitch extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="最新视频" key="1">
                    <GridItem/>
                </TabPane>
                <TabPane tab="播放较多" key="2">播放较多</TabPane>
                <TabPane tab="评分较好" key="3">评分较好</TabPane>
            </Tabs>
        );
    }
}
