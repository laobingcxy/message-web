import axios from '@/api/http'


export function getAppLists(params) {
    return axios({
        url: '/10004001',
        method: 'get',
        params
    })
}

export function getEmpMesLists(params) {
    return axios({
        url: '/10002001',
        method: 'get',
        params
    })
}

export function getEmpMesListForSender(params) {
    return axios({
        url: '/10002003',
        method: 'get',
        params
    })
}

export function logout(params) {
    return axios({
        url: '/10003002',
        method: 'get',
        params
    })
}