/**
 * Revision History:
 *   Initial: 2018-05-31    Wang Huajian
 */

import React from 'react';
import { Layout, Menu, Icon, Avatar, Dropdown, message } from 'antd';
import { connect } from 'dva';
import { Switch, Link, Route } from 'dva/router';

import Newuser from '../routes/Newuser';
import Modifystate from '../routes/Modifystate';
import Selectuser from '../routes/Selectuser';
import Userlist from '../routes/Userlist';
import Topup from '../routes/Topup';

import styles from '../layouts/BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
// const onClick = function ({ key }) {
//   message.info(`退出登录 ${key}`);
//   this.props.dispatch({
//     type: 'user/exit',
//   })
// };

// const menu = (
//   <Menu selectable onClick={this.onClick} className={styles.menu}>
//     <Menu.Item key="1" selectable="true">退出登录</Menu.Item>
//   </Menu>
// );

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onClick = function ({ key }) {
    message.info(`退出登录 ${key}`);
    this.props.dispatch({
      type: 'user/exit',
    })
  };
  render() {
    const menu = (
      <Menu selectable onClick={this.onClick} className={styles.menu}>
        <Menu.Item key="1" selectable="true">退出登录</Menu.Item>
      </Menu>
    );
    
    // const myAccount = localStorage.getItem('myAccount');
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
                <Menu.Item key="1"><Link to="/admin/newuser">新用户</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/admin/modifystate">修改状态</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/admin/selectuser">查看用户信息</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/admin/userlist">用户列表</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/admin/topup">充值</Link></Menu.Item>
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
            <Content style={{ minHeight: '80vh', backgroundColor: '#FFFFFFF'}}>
              <Switch>
                <Route path="/admin/newuser" component={Newuser} />
                <Route path="/admin/modifystate" component={Modifystate} />
                <Route path="/admin/selectuser" component={Selectuser} />
                <Route path="/admin/userlist" component={Userlist} />
                <Route path="/admin/topup" component={Topup} />
              </Switch>
            </Content>
            <Footer style={{ background: '#fff' }} className={styles.footer}>
              Copyright <Icon type="copyright" /> 2018毕业设计
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}))(BasicLayout);
