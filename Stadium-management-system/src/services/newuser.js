/**
 *  Revision  History
 *        Initial: 2018/06/02   Wang  Huajian
 */

import request from '../utils/request';

export async function AdminUser(params) {
  return request({
    url: '/api/admin/login',
    method: 'POST',
    data: params,
  });
}
