import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { Form, Spin, Input, Icon, Button } from 'antd';
import './login.less';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isCertificates: false,
            show: true,
        };
    }

    handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <div className="login" >
                <div className="login-main">
                    <QueueAnim delay={300} type="bottom" key="row">
                        {
                            this.state.show
                                ?
                                (<Form onSubmit={this.handleSubmit} key="a" className="form">
                                    <Form.Item >
                                        <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" type="text" />
                                    </Form.Item>
                                    <Form.Item >
                                        <Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password" />
                                    </Form.Item>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit" className="form-btn">登录</Button>
                                    </Form.Item>
                                </Form>)

                                : <Spin className="spin-center"></Spin>
                        }

                    </QueueAnim>
                </div>

            </div>
        );
    }
}