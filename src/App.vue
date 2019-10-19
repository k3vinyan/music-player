<template>
  <div id="app">
    <MusicPlayer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MusicPlayer from './components/Musicplayer.vue'

export default {
  name: 'app',
  components: {
    MusicPlayer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
