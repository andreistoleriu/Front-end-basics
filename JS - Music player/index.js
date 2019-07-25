function MusicPlayer(initialPlaylist=[]) {
    this.playlist = initialPlaylist;
    this.play = function (position = 0) {
        console.log('Now playing:', this.playlist[position]);
    }
    this.addToPlaylist = function(melodie) {
        this.playlist.push(melodie);
        console.log('Added to playlist', melodie);
    }
    this.removeFromPlaylist = function (melodie) {
        var position = this.playlist.indexOf(melodie);
        this.playlist.slice(position)
    }
    this.showPlaylist = function() {
        this.playlist.forEach(function(value) {
            console.log(value);
    }
}
}
    
    

var playlist = ['Song 1', 'Song 2', 'Song3', ]
var Sporify = new MusicPlayer(playlist);

Sporify.play(2);
Sporify.addToPlaylist('Macanache - Sefu');
Sporify.showPlaylist();