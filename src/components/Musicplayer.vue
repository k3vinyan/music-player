<template>
    <div class="player-container">
        <div v-for="song in player.songs" :key="song.id" class="card" :style="{backgroundImage: 'url(' + song.artist_image_medium +')'}">
            <img class="artist" :src="song.artist_image_medium" />
        </div>
        
        <img class="svg-icon" :src="musicIcon.prev" />
        <img class="svg-icon" @click="play" :src="musicIcon.play" />
        <img class="svg-icon" :src="musicIcon.next" />
    </div>

</template>

<script>

import Player   from '../js/player.js';
import playSVG  from '../../public/images/play.svg';
import pauseSVG from '../../public/images/pause.svg';
import nextSVG  from '../../public/images/next.svg';
import prevSVG  from '../../public/images/previous.svg';

const player = new Player();
player.fetchSongs();

export default {
    name: 'musicplayer',
    data: function() {
        return {
            player: player,
            musicIcon: {
                play: playSVG,
                pause: pauseSVG,
                prev: prevSVG,
                next: nextSVG
            }
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
    .artist {
        width: 200px;
        height: 200px;
        border-radius: 100px 100px 100px 100px;
        object-fit: cover;
    }
    .card {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(100%);
    }

    .svg-icon {
        width: 75px;
        height: auto;
    }
</style>