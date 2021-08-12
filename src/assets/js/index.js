import Chat from "@/views/Chat"
import Login from "@/views/Login"
import Auth from "@/views/Auth"
import Param from "@/views/Param"
import Data from "@/views/Data"
import {queryLabs} from "@/api/user/index"
import websocket from "@/assets/js/websocket";
import {logout} from "@/api/user/chat";

export default {
    components: {
        Chat,
        Login,
        Auth,
        Data,
        Param
    },
    mounted() {
        this.queryLabs()
    },
    data() {
        return {
            tabs: [],
            currentView: 'Chat'
        }
    },
    methods: {
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

        queryLabs() {
            queryLabs(
                {userId: localStorage.getItem('token')}
            ).then(res => {
                this.tabs = res.data
            })
        }
    }
}
