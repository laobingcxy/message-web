<style src="../assets/css/index.css"></style>
<script src="../assets/js/index.js"></script>

<template>

    <div id="nav">
        <div class="nav-talk" style="cursor: pointer; display: flex">
            <el-icon class="el-icon-bell" style="color: white; padding-top: 6px;padding-left: 7px">
            </el-icon>
            <el-popover
                    placement="bottom-end"
                    :width="200"
                    trigger="hover"
                    content="功能开发中,需求建议请及时提工单..."
                    popper-class="my-popover"
            >
                <template #reference>
                    <span style="color: white; font-size: 13px;padding-top: 5px;padding-left: 6px">公告</span>
                </template>
            </el-popover>

        </div>

        <div class="nav-lgout" style="cursor: pointer; display: flex">
            <el-icon class="el-icon-switch-button" style="color: white;padding-top: 2px;padding-right: 5px">
            </el-icon>
            <span style="color: white; font-size: 13px" @click="logout">退出</span>
        </div>
    </div>
    <div class="tab-header">
        <el-tabs v-model="currentView" class="tab-header-title">
            <el-tab-pane
                    v-for="(item, index) in tabs"
                    :key="item.labelId"
                    :label="item.name"
                    :name="item.title"
                    lazy
            />
        </el-tabs>
    </div>
    <div class="main">
        <component :is="currentView"></component>
    </div>

    <div class="oax_footer">
        <div class="oax_footer_txt">
            ©老兵程序员 版权所有
        </div>
    </div>
</template>