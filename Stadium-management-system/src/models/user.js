/**
 *   Revision  History
 *         Initial:  2018/05/31  Wang Huajian
 */

import { routerRedux } from 'dva/router';
import { AdminLogin } from '../services/login';

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
      console.log(params, 'bbbbbbb')
      const result = yield call(AdminLogin, params)
      console.log(result, 'rrrrrr')
      if (result.status === 0) {
        yield put(routerRedux.push('/admin'));
      }
    }
  },

  reducers: {
  },

};
