<script src="../assets/js/login.js"></script>
<style src="../assets/css/login.css"></style>
<template>
    <div class="login_warp">

        <div class="loginbox fl">
            <div class="login_m_top">
                <strong class="lgtitle">企业微信管理系统</strong>
                <div class="locale_span">

                    <span class="locale_span" id="selLang" val="en_US"></span>

                </div>
            </div>
            <div class="login_content">
                <div v-show="cur==0" class="Cbody_item">
                    <div class="form_item">
                        <input type="text" v-model="user.fname" placeholder="用户名">
                    </div>
                    <div class="form_item">
                        <input type="password" v-model="user.fpassword" placeholder="密码">
                    </div>

                    <div class="clear"></div>
                    <div class="form_item">
                        <input type="submit" @click="login" name="" value="登录">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


