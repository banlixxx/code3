import request from '@/utils/request.js'

export const getCategoryAPI = () => {
  return request.get('/home/category/head')
}
