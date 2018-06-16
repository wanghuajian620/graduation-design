/**
 *   Revision  History
 *         Initial:  2018/06/02  Wang Huajian
 */

import { AdminUser } from '../services/newuser';
import { message } from 'antd';

export default {
  namespace: 'newuser',

  state: {},
  
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *add(object, { put, call }) {
      const params = { // 这里的params 是我们输入的name和pass，目的是把他传给AdminLogin函数。
        name: object.payload.userName,
        phone: object.payload.password,
      };
      console.log(params, 'canshu')
      const result = yield call(AdminUser, params)
      console.log(result, 'result')
      if (result.status === 0 ) {
        message.success('添加成功');
      }
    }
  },

  reducers: {},

};
