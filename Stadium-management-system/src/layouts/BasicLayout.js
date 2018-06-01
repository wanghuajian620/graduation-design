/**
 * Revision History:
 *   Initial: 2018-05-31    Wang Huajian
 */

import React from 'react';
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import styles from '../layouts/BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const onClick = function () {
  this.props.dispatch({
    type: 'user/exit'
  })
};

const menu = (
  <Menu onClick={onClick} className={styles.menu}>
    <Menu.Item>退出登录</Menu.Item>
  </Menu>
);

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh', backgroundColor: '#FFFFFFF'}}>
          <Sider
            width={256}
            breakpoint="xs"
            collapsedWidth="0"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{ background: '#fff', padding: 0 }}
          >
            <div className={styles.logo}>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>李若轩</h1>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <SubMenu key="sub1" title={<span><Icon type="team" /><span>用户管理</span></span>}>
                <Menu.Item key="1">新用户</Menu.Item>
                <Menu.Item key="2">修改状态</Menu.Item>
                <Menu.Item key="3">查看用户信息</Menu.Item>
                <Menu.Item key="4">用户列表</Menu.Item>
                <Menu.Item key="5">充值</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>场地管理</span></span>}>
                <Menu.Item key="6">新建场地</Menu.Item>
                <Menu.Item key="7">场地信息</Menu.Item>
                <Menu.Item key="8">场地列表</Menu.Item>
                <Menu.Item key="9">修改状态</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="setting" /><span>服务</span></span>}>
                <SubMenu key="sub4" title="消费账单">
                  <Menu.Item key="10">账单列表</Menu.Item>
                  <Menu.Item key="11">用户消费列表</Menu.Item>
                  <Menu.Item key="12">场地消费列表</Menu.Item>
                  <Menu.Item key="13">总计</Menu.Item>
                </SubMenu>
                <Menu.Item key="14">入场</Menu.Item>
                <Menu.Item key="15">出场</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                style={{ cursor: 'pointer', fontSize: 20 }}
                className={styles.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <span className={styles.title}>体育馆预约管理系统</span>
              <Dropdown overlay={menu}>
                <span className={styles.flexavatar}>
                  <Avatar className={styles.avatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <span className={styles.name}>李若轩</span>
                </span>
              </Dropdown>
            </Header>
            <Content style={{ minHeight: '80vh', backgroundColor: '#FFFFFFF'}}>Content</Content>
            <Footer style={{ background: '#fff' }} className={styles.footer}>
              Copyright <Icon type="copyright" /> 2018毕业设计
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default BasicLayout;
