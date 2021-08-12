import {getAppLists, getEmpMesLists, getEmpMesListForSender, logout} from '@/api/user/chat.js'
import Talk from "@/views/Talk"
import {stringUtil} from '@/assets/js/stringUtil'
import websocket from '@/assets/js/websocket'

export default {
    data() {
        return {
            chatMessage: [],
            close: false,
            isActive1: -1,
            isActive: -1,
            employees: [],
            talkItems: [],
            currentDate: new Date(),
            sender: '',
            mark: 0,//首次打开聊天框标记位置
            hd: ''
        }
    },
    components: {
        Talk
    },
    created() {
        this.appListData();
    },
    mounted() {
        websocket.sendThis(this);
    },
    methods: {
        eventMy() {
            if (this.mark == 1) {
                this.mark = 2
            } else {
                this.close = false
                if (websocket.getWb != '') {
                    websocket.closeClient();
                    websocket.setWb()
                }
            }
        },

        content(id, index) {
            this.isActive = index;
            getEmpMesLists({
                page: 1,
                size: 10,
                id: id
            }).then(res => {
                res.data.list.forEach(k => {
                    if (k.content.length > 5) {
                        k.content = k.content.substring(0, 5) + '...'
                    }
                })
                this.employees = res.data.list
            })
        },

        chat(sender, apply, index) {
            if (websocket.getWb() != '') {
                websocket.closeClient();
                websocket.setWb()
            }
            this.hd = localStorage.getItem(apply + '-' + 'hd');
            this.mark = 1
            this.sender = sender
            getEmpMesListForSender({
                page: 1,
                sender: sender,
                apply: apply
            }).then(res => {

                res.data.list.forEach(k => {
                    k.content = stringUtil(k.content)
                })
                this.chatMessage = res.data.list
            })
            websocket.initWebSocket(sender, apply);
            this.isActive1 = index;
            this.drawer = true;
            this.close = true;

        },

        appListData() {
            getAppLists({page: 1, size: 10}).then(res => {
                res.data.list.forEach(k => {
                    localStorage.setItem(k.applyId + '-' + 'hd', k.applyUrl);
                })
                this.talkItems = res.data.list
            })
        },

        logout() {
            if (websocket.getWb() != '') {
                websocket.closeClient();
            }
            logout().then(res => {
                if (res.code == 0) {
                    this.$router.push({path: '/login'})
                    setTimeout(() => {
                        localStorage.clear()
                    }, 500);
                }
            })


        },

        closeChat() {
            websocket.closeClient();
            this.close = false
        },


        handleCommand(command) {
            this.$message('click on item ' + command);
        }

    },
};