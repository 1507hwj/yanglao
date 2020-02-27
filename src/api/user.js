<<<<<<< HEAD
import request from '@/utils/request'
=======
import {
  request
} from '../utils/request'
>>>>>>> f2a3f4c6e8681fb8c9b4358da21a834a26db8150

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}



