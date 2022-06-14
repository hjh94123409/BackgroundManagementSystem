import request from './request'
export const getUser = (params) => {
    return request({
        url: '/users',
        params
    })
}

export const changeUserState = (uId, type) => {
    return request({
        url: `users/${uId}/state/${type}`,
        method: 'put'
    })
}
