import emotion from "@/components/emotion/emotion";
import * as dateUtils from "@/assets/js/date"
import {sendMessage} from '@/api/user/talk'
import {stringUtil} from '@/assets/js/stringUtil'
import {getEmpMesListForSender} from '@/api/user/chat.js'

export default {
    props: ['chatMessage', 'sender', 'hd'],
    components: {
        emotion
    },

    data() {
        return {
            url: "https://rescdn.qqmail.com/node/wwopen/wwopenmng/images/qq_emotion/qq/",
            contentDiv: [],
            textarea: "",
            textarea1: "",
            emotionIsShow: false, // 表情面板控制出现
            divIptEmotion: [], // 接收表情组件传过来的数据
            a: [],
            flag: true,
            show: false,
            closeChat: this.close,
            count: 2,
            page: 0,
            scr: false
        }
    },
    mounted() {
        let box = this.$refs.box;
        box.addEventListener('scroll', this.handleScroll, true);
        this.scrollToBottom()
    },
    updated() {
        if (!this.scr) {
            this.scrollToBottom()
        }
    },
    methods: {
        handleScroll(e) {
            let scrollTop = e.target.scrollTop;
            if (scrollTop == 0) {
                getEmpMesListForSender({
                    page: this.count,
                    sender: this.sender,
                    apply: this.chatMessage[0].apply
                }).then(res => {
                    this.page = res.data.lastPage
                    if (this.count <= this.page) {
                        this.count = this.count + 1
                        res.data.list.reverse().forEach(k => {
                            k.content = stringUtil(k.content)
                            this.chatMessage.unshift(k)
                        })
                        this.scr = true
                        this.$refs.box.scrollTop = 380
                    } else {
                        this.scr = false
                    }
                })
            }

        },
        stringUtil(content) {
            stringUtil(content)
        },
        scrollToBottom() {
            this.$nextTick(() => {
                let box = this.$el.querySelector(".talk-content")
                box.scrollTop = box.scrollHeight
            })
        },
        isShow() {
            if (this.emotionIsShow === false) {
                this.emotionIsShow = true;
            } else {
                this.emotionIsShow = false;
            }
        },
        iptFocus() {
            this.emotionIsShow = true;
        },
        getValue(val, item) {
            let img = '<img src="' + this.url + val + '.png"  style= "width: 22px;height: 22px">';
            let el = '[' + item + ']'
            this.emotionIsShow = false;
            this.textarea = this.textarea + el;
            this.textarea1 += img;
        },
        submit() {
            let token = localStorage.getItem('token');
            let name = localStorage.getItem('name');
            let hd = localStorage.getItem(this.chatMessage[0].apply + '-' + 'hd')
            let content1 = this.textarea;
            let content = this.textarea;
            content = stringUtil(content)

            let now = dateUtils.formatDate(new Date, 'yyyy/MM/dd hh:mm:ss')
            let pushData = {
                "name": name,
                "url": "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/tb.1.aa1c5ef8.b6wf2NrUegDUAAA_2NTjLg",
                "content": content,
                "sender": token,
                "time": now,
                "flag": 1
            };

            this.textarea = "";
            this.textarea1 = "";
            this.chatMessage.push(pushData);
            sendMessage({
                apply: this.chatMessage[0].apply,
                sender: this.sender,
                userId: token,
                content: content1,
                time: now,
                type: 'text'
            }).then(res => {
                console.log(res)
            })
        },
        exit() {
            this.$emit('close', this.fleg)
        }
    }
}