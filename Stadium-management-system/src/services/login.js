/**
 *  Revision  History
 *        Initial: 2018/05/31   Wang  Huajian
 */

import request from '../utils/request';

export async function AdminLogin(params) {
  return request({
    url: '/api/admin/login',
    method: 'POST',
    data: params,
  });
}
