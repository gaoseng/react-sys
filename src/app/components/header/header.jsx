import React, { Component } from 'react';
import './header.less';
import { Row, Col, Menu, Icon, Dropdown, Button } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = (
            <Menu className="nav-dropmenu">
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <header className='header'>
                <Row>
                    <Col span={20}>
                        <div className="logo">
                            <span className='header-img'></span>
                            <span className="header-title">React</span>
                        </div>
                        {/* {menu} */}
                    </Col>
                    <Col span={4}  className='col'>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Icon type="user" />
                    </Dropdown>
                    </Col>
                </Row>
            </header>
        );
    }
}
