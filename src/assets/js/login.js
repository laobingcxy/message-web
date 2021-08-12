import {login} from "@/api/user/login"
import {ElMessage} from 'element-plus'

export default {
    components: {
        login
    },
    data() {
        return {
            user: {
                fname: '',
                fpassword: ''
            },
            cur: 0,
            redirect: undefined
        }
    },
    methods: {
        login() {
            login({
                fname: this.user.fname,
                fpassword: this.user.fpassword
            }).then(res => {
                    if (res.code === 0) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('name', res.data.displayName);
                        this.$router.push({path: '/index'})
                    } else {
                        ElMessage.error('账号或密码错误,请重新输入');
                        this.$router.push({path: '/login'})

                    }
                }
            )
        }

    }
}