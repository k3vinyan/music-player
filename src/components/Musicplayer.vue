<template>
    <div class="player-container">
        <div v-for="song in player.songs" :key="song.id" class="card" :class="{ hide: showCard(song.id) }" >
            <div class="card-background" :style="{backgroundImage: 'url(' + song.artist_image_medium +')'}"></div>
           
            <img class="artist" :src="song.artist_image_medium" />
             <p>
                {{song.track1_name}}
            </p>
            <p>
                {{song.artistexpand_value}}
            </p>
        </div>
        
       
        <div class="player-controls">
            <div class="bar">Progress bar</div>
            <div class="controls">
                <img class="svg-icon" @click="previous" :src="musicIcon.prev" />
                <template v-if="togglePlay">
                    <img class="svg-icon" @click="play" :src="musicIcon.play" />
                </template>  
                <template v-else>
                    <img class="svg-icon" @click="pause" :src="musicIcon.pause" />
                </template>     
            <img class="svg-icon" @click="next" :src="musicIcon.next" />
            </div>  
        </div>

        <div class="seeker-container">
            <template v-if="this.currentAudio !== null">
               
            </template>
        </div>
        
        <div class="slide-container" @input="slider">
        <img class="svg-icon" :src="musicIcon.volumeON" id="volume-icon" />
            <input type="range" min="0" max="100" value="50" class="slider" id="myRange">
        </div>
        <div>
            
        </div>
        
    </div>

</template>

<script>

import player      from '../js/player.js';
import playSVG      from '../../public/images/play.svg';
import pauseSVG     from '../../public/images/pause.svg';
import nextSVG      from '../../public/images/next.svg';
import prevSVG      from    '../../public/images/previous.svg';
import volumeOnSVG  from '../../public/images/volume-on.svg';
import volumeOffSVG from '../../public/images/volume-off.svg';

export default {
    name: 'musicplayer',
    data: function() {
        return {
            player: player,
            musicIcon: {
                play: playSVG,
                pause: pauseSVG,
                prev: prevSVG,
                next: nextSVG,
                volumeON: volumeOnSVG
            },
            currentActiveIndex: 1,
            currentAudio: this.test(),
            currentVolume: 0.5,
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
            audio.volume = this.currentVolume;
            audio.play();
            this.print();
            
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
        setVolume: function(value) {
            if(this.currentAudio == null) { 
                return;
            }
            this.currentVolume = value * 0.01;
            this.changeVolumeIcon(this.currentVolume);
            this.updateVolume(this.currentVolume);
        },
        updateVolume: function(value) {
            this.currentAudio.volume = this.currentVolume;
            console.log(this.currentAudio.currentTime)
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
            return !this.togglePlay;
        },
        print: function() {
            console.log(this.player.songs[0])
        },
        slider: function(el) {
            const sliderValue = el.target.value;
            this.setVolume(sliderValue);
        },
        changeVolumeIcon: function(value) {
                let el = document.getElementById('volume-icon');
            if(value === 0) {
                el.src= volumeOffSVG;
            } else {
                el.src = volumeOnSVG;
            }
        },
        test: function() {
            
        }
    },
    computed: {
        setIntitalAudio: function() {
            console.log("cat")
        }
    }
}
</script>

<style scoped>
    div {
        display: inline-block;
        border: solid 1px black;
        width:  600px;
        height: 400px;
        color: white;
    }
    .player-container {
        display: flex;
        position: relative;
        flex-direction: column;
    }
    .player-controls {
        display: flex;
        align-items: flex-end;
        align-content: flex-end;
        flex-direction: column;
    }
    div.bar {
        height: fit-content;
    }
    div.controls {
        height: fit-content;
    }
    .hide {
        display: none !important;
    }

    .card {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .card .artist {
        width: 200px;
        height: 200px;
        border-radius: 100px 100px 100px 100px;
        margin-top: 50px;
        object-fit: cover;
    }

    .card-background {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -100;
        justify-content: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(5px);
    }

    .card img {
        margin: 5px 5px 5px 5px;
    }

    .svg-icon {
        width: 25px;
        height: auto;
        margin: 5px 5px 5px 5px;
    }
</style>