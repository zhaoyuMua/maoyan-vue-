<template>
  <div>
    <div class="header">
      <div class="header-left" v-if="back">
        <span class="iconfont icon-zuojiantou" @click="goBack"></span>
      </div>
      <h1 class="title">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  props:{
    title:{
      type:String
    },
    back:{
      type:Boolean,
      default:true
    }
  },
  methods: {
    goBack(){
      this.$router.back()
    }
  }

};
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
  .header
    height: 50px
    color: #fff
    background: $bgColor
    border-bottom: 1px solid #e54847
    position: relative
    .header-left
      position: absolute
      left: 10px
      top: 16px
      .icon-zuojiantou
        font-size:20px
    .title
      font-size: 18px
      font-weight: 400
      text-align: center
      line-height: 50px
      color: #fff
</style>
