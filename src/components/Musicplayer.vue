<template>
    <div class="player-container">
        <div v-for="song in player.songs" :key="song.id" class="card" :class="{ hide: showCard(song.id) }" :style="{backgroundImage: 'url(' + song.artist_image_medium +')'}">
            <img class="artist" :src="song.artist_image_medium" />
        </div>
        
        <img class="svg-icon" @click="previous" :src="musicIcon.prev" />
        <template v-if="togglePlay">
            <img class="svg-icon" @click="play" :src="musicIcon.play" />
        </template>  
        <template v-else>
            <img class="svg-icon" @click="pause" :src="musicIcon.pause" />
        </template>     
        <img class="svg-icon" @click="next" :src="musicIcon.next" />
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
            currentActiveIndex: 1,
            currentAudio: null,
            togglePlay: true
        }
    },
    methods: {
        play: function(id) {
            if(this.currentAudio !== null) {
                this.currentAudio.pause();
            }
            this.togglePlayPause();
            
            const src = this.player.songs[this.currentActiveIndex - 1].track1_preview;
            const audio = new Audio(src);
            this.currentAudio = audio;
            audio.volume = 0.05;
            audio.play();
            
        },
        pause: function() {
            this.togglePlay = !this.togglePlay;
            this.currentAudio.pause();
        },
        next: function() {
            this.increaseIndex();
            this.play();
        },
        previous: function() {
            if(this.currentActiveIndex === 1) {
                return;
            }
            this.decreaseIndex();
            this.play();
        },
        isPlaying: function() {
            if(this.currentAudio === null) {
                return true;
            }
            return this.currentAudio.paused;
        },
        togglePlayPause: function() {
            if(this.isPlaying()) {
                this.togglePlay = false;
            } else {
                this.togglePlay = true;
            }
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

        },
        togglePlayfunction: function() {
            console.log(this.togglePlay)
            return !this.togglePlay;
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