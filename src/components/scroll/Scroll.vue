<template>
  <div ref="wrapper" class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: false
    });
  }
};
</script>

<style scoped>
    li{
        list-style: none;
        height: 50px;
        border:1px soild red;
    }
</style>
