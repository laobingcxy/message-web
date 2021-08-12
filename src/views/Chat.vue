<style src="../assets/css/chat.css"></style>
<script src="../assets/js/chat.js"></script>
<template>
    <div class="main" @click="eventMy()">
        <div class="left">
            <div class="header">
                <p style="font-size: 16px">应用消息</p>
            </div>
            <div class="left-item">
                <div v-for="(item,index) in talkItems" v-bind:class='{ bg: index==isActive }'>

                    <div @click="content(item.applyId,index)">
                        <div class="image">
                            <el-avatar shape="circle" :size="48" :src="item.applyUrl"></el-avatar>
                            <div class="image-title">
                                <p style="font-size:15px"> {{item.applyName}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="main-header">
                <!--                <el-badge :value="200" :max="99" class="item">-->
                <!--                </el-badge>-->
                <el-dropdown @command="handleCommand">

                      <span class="el-dropdown-link">
                          <p style="font-size: 16px">全部</p>
                      </span>

                </el-dropdown>

            </div>

            <div class="left-main">
                <div class="card-header" style="cursor: pointer;">
                </div>
                <div class="list">
                    <div v-for="(item,index) in employees" @click="chat(item.sender,item.apply,index) "
                         class="list-item"
                         v-bind:class='{bg1: index==isActive1}'>
                        <div class="list-item1">
                            <p style="font-size:10px">{{item.name}}</p>
                        </div>
                        <div class="list-item2">
                            <p style="font-size:10px">{{item.content}}</p>
                        </div>
                        <div class="list-item3">
                            <p style="font-size:10px">{{item.time}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="close" class="talk-frame">
        <Talk @close="closeChat" :chatMessage="chatMessage" :sender="sender" :hd="hd"></Talk>
    </div>

</template>


