<template>
  <div class="main-wrapper">
    <Header></Header>
  </div>
</template>
<script setup name="Main">
import Header from './layout/Header.vue'
</script>
<style lang="scss" scoped>
.main-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/layout/bg_img.png');
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  /* 兼容Webkit内核浏览器如Chrome和Safari */
  -o-background-size: cover;
  /* 兼容Opera */
  zoom: 1;
}
</style>