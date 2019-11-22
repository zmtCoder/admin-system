import http from '@/utils/http'

// GET /userRole/findAllUser 查询所有用户
export function findAllUser (params) {
  return http({
    url: 'userRole/findAllUser',
    method: 'GET',
    params
  })
}

// POST /userRole/pageUser 分页查询用户信息
export function pageUser (params) {
  return http({
    url: 'userRole/pageUser',
    method: 'POST',
    params
  })
}

// POST /userRole/saveOrUpdateUser 添加/更新用户信息
export function saveOrUpdateUser (params) {
  return http({
    url: 'userRole/saveOrUpdateUser',
    method: 'POST',
    params
  })
}

// GET /userRole/findUserById 获取用户信息
export function findUserById (params) {
  return http({
    url: 'userRole/findUserById',
    method: 'GET',
    params
  })
}

// POST /userRole/deleteUserById 删除用户信息
export function deleteUserById (params) {
  return http({
    url: 'userRole/deleteUserById',
    method: 'GET',
    params
  })
}

// POST / userRole / assignRoles 给用户分配角色
export function assignRoles (params) {
  return http({
    url: 'userRole/assignRoles',
    method: 'GET',
    params
  })
}

// POST /userRole/assignGroup 给用户分配设备组
export function assignGroup (params) {
  return http({
    url: 'userRole/assignGroup',
    method: 'GET',
    params
  })
}

// GET /userRole/isUser 查询登录名是否存在
export function isUser (params) {
  return http({
    url: 'userRole/isUser',
    method: 'GET',
    params
  })
}