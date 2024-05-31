<template>
  <Header/>
  <div class="container">

    <!--router:view: 라우팅이 되는 영역-->
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { provide } from 'vue';
provide('videos', [
  { "id":"BuxlMIHLbZk", "title":"기죽은 명수옹", "category":"오분순삭" },
  { "id":"BlHugT0ho4g", "title":"가성비 개그의 달인 명수옹", "category":"오분순삭" },
  { "id":"8hBOEV_9zLA", "title":"창의적 타격왕 명수옹", "category":"오분순삭" },
  { "id":"AAMEZeOLl5k", "title":"십잡스 명수옹", "category":"오분순삭" },
  { "id":"IOtHewEnuP8", "title":"피꺼솟 명수옹", "category":"오분순삭" },
  { "id":"gBjkdNbQApY", "title":"솔직뻔뻔당당 명수옹", "category":"오분순삭" }
]);
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.container { text-align: center; margin-top:10px; }
.fa { padding: 5px; width: 30px; text-align: center;
    text-decoration: none; margin: 5px 2px; }
.fa-facebook { background: #3B5998; color: white; }
.fa-youtube { background: #BB0000; color: white; }
.fa-instagram { background: #125688; color: white; }
</style>