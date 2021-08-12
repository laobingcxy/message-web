import axios from '@/api/http'


export function getAppLists(data) {
    return axios({
        url: '/10001001',
        method: 'post',
    })
}

export function getEmpMesLists(data) {
    return axios({
        url: '/10002001',
        method: 'post',
    })
}