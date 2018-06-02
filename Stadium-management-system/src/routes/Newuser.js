/**
 *   Revision  History
 *         Initial:  2018/05/31  Wang Huajian
 */

import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'dva';
import styles from './Newuser.less';

const FormItem = Form.Item;

class Newuser extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'newuser/add',
          payload: values, // dispatch 后面跟的是object即model里的object
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.background}>
        <Form onSubmit={this.handleSubmit.bind(this)} className={styles.form}>
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
              rules: [{ required: true, message: 'Please input your telephone-number!' }],
            })(
              <Input
                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })}
            <Button type="primary" htmlType="submit" className={styles.button}>
              添加
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({
  newuser: state.newuser,
}))(Form.create()(Newuser));