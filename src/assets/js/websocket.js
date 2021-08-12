import {stringUtil} from '@/assets/js/stringUtil'

let vm = null
let websocket = ''
const url = process.env.VUE_APP_WS_URL
const sendThis = (_this) => {
    vm = _this;
};

export function getWb() {
    return websocket
}

export function setWb() {
    websocket = ''
}

export function closeClient() {
    if (websocket != '') {
        websocket.close()
    }
}

function initWebSocket(sender, apply) {
    let token = localStorage.getItem('token');
    let wbUrlHeader = 'ws://' + url + '/90000001/'
    let wbUrl = wbUrlHeader + sender + '/' + apply + '/' + token
    websocket = new WebSocket(wbUrl);


    websocket.onopen = () => {
        console.log('open')
    }

    websocket.onmessage = (e) => {
        console.log('rev')
        let obj = JSON.parse(e.data)
        obj.content = stringUtil(obj.content)
        vm.chatMessage.push(obj);
    }

    websocket.onclose = (e) => {
        console.log("close")
    }
}

export default {
    sendThis,
    initWebSocket,
    getWb,
    closeClient,
    setWb
}