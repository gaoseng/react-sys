import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import './leftNav.less';

const SubMenu = Menu.SubMenu;

export default class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }


    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        
        return (
            <div  id="leftNav" style={{ width: "12rem" }}>
                
                    {/* <Button type="primary" onClick={this.toggleCollapsed}  className="toggleCollapsed">
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button> */}
                    <div onClick={this.toggleCollapsed} className="toggle-collapsed" style={this.state.collapsed? {width: "5rem"} : {width:"12rem"}}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </div>
                
                <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" title={<span><Icon type="edit" style={{ backgroundColor: '#42485B'}} /><span>工作台</span></span>}>
                        <Menu.Item key="5">概览</Menu.Item>
                        <Menu.Item key="6">图表</Menu.Item>
                        <Menu.Item key="7">编辑器</Menu.Item>
                        <Menu.Item key="8">聊天室</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="user" style={{ backgroundColor: '#42485B'}} /><span>设置中心</span></span>}>
                        <Menu.Item key="9">用户管理</Menu.Item>
                        <Menu.Item key="10">角色管理</Menu.Item>
                        <Menu.Item key="11">权限管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }

}
