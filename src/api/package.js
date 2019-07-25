import request from '../http/http'

export function getAllItem () {
  return request({
    url: '/packages',
    method: 'get'
  })
}

export function updateItemStatus(item) {
  return request({
    url: '/packages',
    method: 'put',
    data: item
  })
}

export function sortBystatus(status) {
  return request({
    url: '/packages',
    method: 'get',
    params: {status: status}
  })
}

export function createPackage(item) {
  return request({
    url: '/packages',
    method: 'post',
    data: item
  })
}
