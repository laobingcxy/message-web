<template>
    <div class="emoticon-list-cover" v-show="isShow">
        <div class="emoticon-list">
            <div class="pic-item" v-for="(item,i) in emotionList" @click="clickEmoticon(i,item)" :key="i">
                <img :src=" 'https://rescdn.qqmail.com/node/wwopen/wwopenmng/images/qq_emotion/qq/' + i + '.png'"
                     :title="item" class="emotion" v-if="i>0">

            </div>
        </div>
    </div>
</template>

<script src="./js/emotion.js"></script>

<style src="./css/emotion.css"></style>