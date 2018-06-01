/**
 *   Revision  History
 *         Initial:  2018/05/31  Wang Huajian
 */

import { routerRedux } from 'dva/router';
import { AdminLogin } from '../services/login';
import { message } from 'antd';

export default {

  namespace: 'user',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *logins(object, { call, put }) {
      const params = { // 这里的params 是我们输入的name和pass，目的是把他传给AdminLogin函数。
        name: object.payload.userName,
        pwd: object.payload.password,
      };
      const result = yield call(AdminLogin, params)
      if (result.status === 0) {
        yield localStorage.setItem('myAccount', JSON.stringify(params));
        yield put(routerRedux.push('/admin'));
      } else {
        message.error('This is a message of error');
      }
    },
    *exit(object, { put }) {
      yield localStorage.removeItem('myAccount')
      yield put(routerRedux.push('./'))
    }
  },

  reducers: {
  },

};
