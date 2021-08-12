import {roleLists, addUserAuth, queryAuthList} from '@/api/user/auth'
import {ElMessage} from 'element-plus'
import {getAppLists} from "@/api/user/chat";

export default {
    data() {
        return {
            apply: [],
            applyMark: false,
            labelPosition: 'right',
            currentPage: 1, //当前页
            pageSize: 4, //每页显示条目数
            total: 0,
            content: '',
            userNo: null,
            roles: [],
            options: [],
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            select: '请选择角色',
            value1: true,
            value2: true,
            tableData: []
        }
    },
    created() {
        this.queryAuthList();
    },

    methods: {
        appListData() {
            getAppLists({page: 1, size: 15}).then(res => {
                this.options = res.data.list
            })
        },

        query() {
            queryAuthList({
                page: this.currentPage,
                pageSize: this.pageSize,
                query: this.content
            }).then(res => {
                this.tableData = res.data.list
                this.total = res.data.total
            })
        },

        queryAuthList() {
            queryAuthList({
                page: this.currentPage,
                pageSize: this.pageSize,
            }).then(res => {
                this.tableData = res.data.list
                this.total = res.data.total
            })
        },
        add() {
            this.dialogFormVisible = true;
            this.roleLists();
        },
        handleClick(row) {
            console.log(row);
        },
        submit() {
            let userNo = this.userNo;
            let select = this.select;
            addUserAuth({
                applyIds: this.apply,
                userId: userNo,
                roleId: select
            }).then(res => {
                if (res.code == 1) {
                    ElMessage.warning({
                        message: res.msg,
                        type: 'warning'
                    });
                } else {

                    ElMessage.success({
                        message: '添加成功',
                        type: 'success'
                    });
                    this.dialogFormVisible = false
                    this.apply = []
                    this.applyMark = false
                    this.queryAuthList();
                }
            })

        },
        cancel() {
            this.dialogFormVisible = false
            this.apply = []
            this.applyMark = false
            this.userNo = null
            this.select = '请选择角色'
        },
        roleLists() {
            roleLists().then(res => {
                this.roles = res.data
            })
        },
        change() {
            let select = this.select
            if (select == 2) {
                this.appListData()
                this.applyMark = true
            } else if (select == 1) {
                this.applyMark = false
            }
        },

        handleSizeChange(size) {
            this.pageSize = size;
        },
        handleCurrentChange(currentPage) {
            queryAuthList({
                page: currentPage,
                pageSize: this.pageSize,
                query: this.content
            }).then(res => {
                this.tableData = res.data.list
            })
        }
    }
}