<template>
    <div class="player-container">
        <div v-for="song in player.songs" :key="song.id" class="card" :class="{ hide: showCard(song.id) }" :style="{backgroundImage: 'url(' + song.artist_image_medium +')'}">
            <img class="artist" :src="song.artist_image_medium" />
        </div>
        
        <img class="svg-icon" @click="decreaseIndex" :src="musicIcon.prev" />
        <img class="svg-icon" @click="play" :src="musicIcon.play" />
        <img class="svg-icon" @click="increaseIndex" :src="musicIcon.next" />
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
            },
            currentActiveIndex: 1
        }
    },
    methods: {
        play: function() {
            const src = this.player.songs[this.currentActiveIndex - 1].track1_preview;
            const audio = new Audio(src);
            audio.play();
        },
        pause: function(audio) {
        this.player.pause(audio)
        },
        showCard: function(id) {
            if(id !== this.currentActiveIndex) {
                return true;
            } else {
                return false;
            }
        },
        decreaseIndex: function() {
            if(this.currentActiveIndex === 1) {
                return;
            }
            this.currentActiveIndex--;
        },
        increaseIndex: function() {
            this.currentActiveIndex++;

        }

       
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
    .player-container {
        display: flex;
    }


    .hide {
        display: none;
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