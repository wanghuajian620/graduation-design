/**
 *   Revision  History
 *         Initial:  2018/05/03  Wang Huajian
 */

import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import styles from './LoginLayout.less';

const FormItem = Form.Item;

class LoginLayout extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/logins',
          payload: values, // dispatch 后面跟的是object即model里的object
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.background}>
        <Form onSubmit={this.handleSubmit.bind(this)} className={styles.loginform}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>,
            )}
            <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
              Login
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
}))(Form.create()(LoginLayout));