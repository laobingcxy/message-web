<script src="../assets/js/talk.js"/>
<style src="../assets/css/talk.css"/>
<template>

    <div class="talk" v-show="flag">
        <div class="talk-header">
            <div class="talk-header-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduocaozuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="exit" style="cursor: pointer;">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>
        </div>

        <div class="talk-content " ref="box">

            <div v-for="item  in chatMessage" style="margin-top: 20px">

                <div style="text-align: center">
                    <p style="font-size: 1px;color: #9b9b9b"> {{item.time}}</p>
                </div>
                <div class="name_right" v-if="item.flag==1">
                    <p style="font-size: 1px; "> {{item.sender}} </p>
                </div>
                <div style="display: flex;">

                    <div class="url_right" v-if="item.flag==1">
                        <el-avatar shape="circle" :size="30" :src="item.url"></el-avatar>
                    </div>
                    <div class="url-left" v-if="item.flag==0">
                        <el-avatar shape="circle" :size="30" :src="item.url"></el-avatar>
                    </div>

                    <div class="name_left" v-if="item.flag==0">
                        <p style="font-size: 1px;"> {{item.sender}} </p>
                    </div>
                </div>
                <div v-html="item.content"
                     class="content_left" v-if="item.flag==0">
                </div>

                <div v-html="item.content"
                     class="content_right" v-if="item.flag==1">
                </div>
            </div>


        </div>


        <div class=" talk-message
                ">
            <div class="talk-message-face">
                <svg class="icon" aria-hidden="true" @click="isShow">
                    <use xlink:href="#icon-biaoqing"></use>
                </svg>
                <emotion :emotionIsShow="emotionIsShow" @sendEmotionSelect="getValue"></emotion>
            </div>
            <div class="talk-message-content">
                <el-input
                        v-model="textarea"
                        resize="none"
                        type="textarea"
                        rows="1"
                        @keyup.enter.native="submit"
                ></el-input>
            </div>
            <div class="talk-message-send">
                <el-button type="text" style="color:#9b9b9b" @click="submit">发送</el-button>
            </div>
        </div>

    </div>


</template>
