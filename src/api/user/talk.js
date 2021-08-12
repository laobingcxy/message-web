import axios from '@/api/http'

export function sendMessage(data) {
    return axios({
        url: '/10002004',
        method: 'post',
        data
    })
}
