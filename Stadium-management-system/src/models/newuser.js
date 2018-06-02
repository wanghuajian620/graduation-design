/**
 *   Revision  History
 *         Initial:  2018/06/02  Wang Huajian
 */

import { AdminUser } from '../services/newuser';

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
      const result = yield call(AdminUser, params)
      if (result ===0 ) {}
    }
  },

  reducers: {},

};
