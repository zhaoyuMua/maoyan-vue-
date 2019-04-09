<template>
    <div class="content">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
  </div>
</template>

<script>
import HottingMovie from './HottingMovie'
import CommingMovie from './CommingMovie'
export default {
    name:"MovieContent",
    props:{
        menuIndex:{
            type:Number,
            default:0
        }
    },
    components:{
        HottingMovie,
        CommingMovie
    },
    computed: {
        currentComponent(){
            return this.menuIndex===0? 'HottingMovie' : 'CommingMovie'
        }
    },
}
</script>

<style lang="stylus" scoped>
.content {
  position: fixed;
  width: 100%;
  top: 96px;
  bottom: 56px;

  .wrap_content {
    overflow: hidden;
    height: 100%;
  }
}
</style>