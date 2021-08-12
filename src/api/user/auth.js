import axios from '@/api/http'

export function roleLists(params) {
    return axios({
        url: '/10007001',
        method: 'get',
        params
    })
}

export function addUserAuth(data) {
    return axios({
        url: '/10006001',
        method: 'post',
        data
    })
}


export function queryAuthList(params) {
    return axios({
        url: '/10006002',
        method: 'get',
        params
    })
}

export function updateUser(data) {
    return axios({
        url: '/10006003',
        method: 'post',
        data
    })
}