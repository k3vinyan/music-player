export default class MusicPlayer {
    constructor() {
        this.songs = null;
    }
  
    // Using the HTMLAudioElement api add these methods
  
    // play
    play(audio) {
        audio.play()
    }
    
    // pause
    pause(audio) {
        audio.play()
    }
  
    // Fetch songs from the provided gist url, if you're having trouble fetching the songs feel free to just scrape the data and hard code it into the project
    // this could be helpful https://developer.github.com/v3/gists/#get-a-single-gist
    fetchSongs() {
        const url = 'https://gist.githubusercontent.com/jasonly/4a720690fdd07f2c1854adf0c2644613/raw/71bd1a975ec1abb2322bae0c7df173d5c7bce171';
        let that = this;
        fetch(url).then(function(data) {
            return data.json()
        }).then(function(data) {
            that.songs =  data;
            return data;
        }).catch(function(error) {
            console.log(error)
        })
    }

    getSongs() {
        
    }
  
    // This should make the dom elements for the music player, you can go as far as you want with this but the only requirements are to show the album art with a play and pause button
    // Feel free to organize the code however you would like to
    createMusicPlayer() {
        const albumArtElement = document.createElement('img');
        albumArtElement.src = "https://picsum.photos/200";


        const container = document.createElement('div');
        const pauseButton = document.createElement('div');
        const playButton = document.createElement('div');
        const albumContainer = document.createElement('div');

        container.id = "music-player";
        pauseButton.id = "pause-button";
        playButton.id = "play-button";
        albumContainer.id = "album-container";

        albumContainer.innerHTML = "ALBUM PICTURE";
        pauseButton.innerHTML = "PAUSE";
        playButton.innerHTML = "PLAY";

        container.appendChild(albumContainer);
        container.appendChild(pauseButton);
        container.appendChild(playButton);

        return container;
    }
  }
  