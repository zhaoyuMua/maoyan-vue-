<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from "@/pages/home/Home"
import Start from "@/pages/start/Start"
export default {
  name: 'App',
  components: {
    Home,
    Start
  }
}
</script>

<style>
</style>
