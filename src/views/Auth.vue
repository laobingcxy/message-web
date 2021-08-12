<script src="../assets/js/auth.js"></script>

<template>
    <div class="auth" style="width: 70%;padding-top: 100px;">
        <div style="margin-bottom: 30px;display: flex;padding-left: 500px">
            <el-input v-model="content" placeholder="请输入内容"
                      style="width: 165px;padding-right: 30px;padding-top: 3px"></el-input>
            <el-button type="primary" icon="el-icon-search" style=" height: 35px" @click="query">搜索</el-button>
            <el-button type="primary" icon="el-icon-plus" style=" height: 35px" @click="add">新增
            </el-button>
        </div>

        <div>
            <el-table
                    :data="tableData"
                    :row-style="{height:'30px'}"
                    style="font-size: 10px">
                <el-table-column
                        label="员工头像"
                        width="120">

                    <template #default="scope">
                        <el-avatar shape="square" :size="40" :src="scope.row.avatar"></el-avatar>

                    </template>
                </el-table-column>
                <el-table-column
                        label="员工编号"
                        prop="userId"
                        width="120">
                </el-table-column>

                <el-table-column
                        label="角色名称"
                        prop="roleName"
                        width="80">
                </el-table-column>
                <el-table-column
                        label="姓名"
                        prop="userName"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="添加人"
                        prop="cUser"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="添加时间"
                        prop="cTime"
                        width="150">
                </el-table-column>

                <el-table-column
                        label="操作"
                        align="right"
                        width="130">

                    <template #default="scope">
                        <el-switch
                                style="display: block;font-size: 3px "
                                :active-value="0"
                                :inactive-value="1"
                                v-model="scope.row.enable"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
            </el-table>

        </div>
        <div style="padding-left: 600px">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    small
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>


    <el-dialog title="新增权限" v-model="dialogFormVisible" width="400px">
        <el-form :label-position="labelPosition" :model="formLabelAlign">
            <el-form-item label=" 员工工号" label-width="80px">
                <el-col :span="20">
                    <el-input v-model="userNo"></el-input>
                </el-col>

            </el-form-item>
            <el-form-item label=" 配置角色" label-width="80px">
                <el-col :span="20">
                    <el-select v-model="select" size="medium" @change="change()">
                        <el-option v-for="item in roles" :key="item.roleId" :label="item.name"
                                   :value="item.roleId"></el-option>
                    </el-select>
                </el-col>

            </el-form-item>


            <el-form-item label=" 应用选择" label-width="80px" class="apply" v-if="applyMark">
                <el-col :span="20">
                    <el-select v-model="apply" multiple placeholder="应用选择">
                        <el-option
                                v-for="item in options"
                                :key="item.applyId"
                                :label="item.applyName"
                                :value="item.applyId">
                        </el-option>
                    </el-select>
                </el-col>
            </el-form-item>


        </el-form>


        <template #footer>
            <span class="dialog-footer">
              <el-button type="primary" @click="submit">添加</el-button>
              <el-button @click="cancel()">取 消</el-button>
            </span>
        </template>
    </el-dialog>

</template>
