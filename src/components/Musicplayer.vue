<template>
    <div class="player-container">
        <div v-for="song in player.songs" :key="song.id" style={background: blue}>
            <img :src="song.artist_image_medium" />
        </div>
        
        <button>Prev</button>
        <button @click="play">Play</button>
        <button>Next</button>
    </div>

</template>

<script>

import playSVG from '../assets/play.svg';
import Player from '../js/player.js';

const player = new Player();
player.fetchSongs();

export default {
    name: 'musicplayer',
    data: function() {

        return {
            player: player
        }
    },
    methods: {
        play: function(audio) {          
            this.player.play(audio)
        },
        pause: function(audio) {
        this.player.pause(audio)
        }
    },
    mounted: function() {
        
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
    img {
        width: 200px;
        height: 200px;
        border-radius: 100px 100px 100px 100px;
        object-fit: cover;
    }



</style>