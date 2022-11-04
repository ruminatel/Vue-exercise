import request from '@/utils/request'

// 向外按需导出一个API的函数
export const getAritcleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
