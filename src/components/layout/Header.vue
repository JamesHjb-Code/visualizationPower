<template>
  <div class="header-wrapper">
    <span class="header-title">智慧变电所平台</span>
  </div>
</template>
<script setup name="Header">

</script>
<style lang="scss" scoped>
.header-wrapper{
  position: fixed;
  top:0px;
  left:0px;
  right:0px;
  width:100%;
  height:60px;
  background-image: url('@/assets/images/layout/header.png');
  background-position: center 0;
  background-repeat: no-repeat;
  .header-title{
    position: absolute;
    top:10px;
    left:50%;
    transform: translateX(-50%);
    font-size:2rem;
    color:#fff;
  }
}
</style>