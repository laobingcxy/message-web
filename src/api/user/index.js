import axios from '@/api/http'

export function queryLabs(params) {
    return axios({
        url: '/10005001',
        method: 'get',
        params
    })
}
