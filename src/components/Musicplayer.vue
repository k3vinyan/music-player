<template>
    <div>
        <div class="">
            <div class="img">

            </div>
        </div>
        <button>Prev</button>
        <button>Play</button>
        <button>Next</button>
    </div>

</template>

<script>

import playSVG from '../assets/play.svg';

const url = "https://api.github.com/gists/4a720690fdd07f2c1854adf0c2644613"

fetch(url)
    .then(function(data) {
        return data.json()
    })
    .then(function(data) {
        console.log(data)
    })

export default {
    name: 'HelloWorld',
  props: {
    msg: String
  },
  template: player,
  methods: {
    play: function(audio) {
      this.musicplayer.play(audio)
    },
    pause: function(audio) {
      this.musicplayer.pause(audio)
    }
  },
  render: function(createElement) {
    return player
  },
  mount: function() {
    return player
  }
}
</script>

<style scoped>
    div {
        display: inline-block;
        border: solid 1px black;
        width:  500px;
        height: 300px;
    }
</style>