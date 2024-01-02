import request from '@/utils/request.js'

export const getCategory = () => {
  return request.get('home/category/head')
}
