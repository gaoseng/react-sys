import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import './leftNav.less';
import { Link, NavLink } from 'react-router-dom';
import Axios from 'axios';

const SubMenu = Menu.SubMenu;

export default class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            workBench: [],
            manageCenter: [],
            num: 0
        };
    }


    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    workBenchFn = (openKeys) => {
        // console.log(openKeys)
        console.log(openKeys[0]);
        this.setState({num: ++this.state.num});
        if( openKeys.length === 0) return;
        Axios.get(`/api/${openKeys[0]}`).then(res => {
            console.log(res.data.key);
            switch (openKeys[0]) {
                case 'work-bench':
                    
                    this.setState({workBench: res.data.value});
                    console.log('-------------------');
                    console.log(this.state.workBench);
                    this.render();
                    break;
                case 'manage-center':
                    this.setState({manageCenter: res.data.value});
            }

        });
        
    }

    render() {
        const workBenchListItems = this.state.workBench.map(
            (item, index) => (<Menu.Item key={index}><Link to={`/work-bench${item}`}>{item}</Link></Menu.Item>) 
            );
        return (
            
            <div  id="leftNav" style={{ width: "12rem" }} >
                
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
                    // onClick={this.workBench} 
                    onOpenChange = {this.workBenchFn}
                >
                    <SubMenu key="work-bench" title={<span><Icon type="edit" style={{ backgroundColor: '#42485B'}} /><span >工作台</span></span>}>
                        {/* <Menu.Item key="5">概览</Menu.Item>
                        <Menu.Item key="6"><Link to="/work-bench/echart">图表</Link></Menu.Item>
                        <Menu.Item key="7">编辑器</Menu.Item>
                        <Menu.Item key="8">聊天室</Menu.Item> */}
                        {/* <Menu.Item key="5">{this.state.num}</Menu.Item> */}
                        {workBenchListItems}
                        {/* <WorkBenchListItemsFn items={this.state.workBench} />
                     */}
                    </SubMenu>
                    <SubMenu key="manage-center" title={<span><Icon type="user" style={{ backgroundColor: '#42485B'}} /><span>设置中心</span></span>}>
                        <Menu.Item key="9"><Link to="/manage-center/user-manage">用户管理</Link></Menu.Item>
                        <Menu.Item key="10">角色管理</Menu.Item>
                        <Menu.Item key="11">权限管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }

}


