import axios from '@/api/http'

export function login(data) {
    return axios({
        url: '/10003001',
        method: 'post',
        data
    })
}
