
  console.log("PC Here!")

juke.controller('PlaylistCreator', function($scope, $http, PlaylistFactory, $log, $state, $stateParams, SongFactory){

  console.log("PC Here!")

  $scope.addToPlaylist = function(aPlaylist) {
    console.log("Button Clicked!");
    var newPlaylist = {};
    newPlaylist.name = aPlaylist;
    newPlaylist.songs = [];
    console.log(newPlaylist);
    PlaylistFactory.addPlaylist(newPlaylist)
      .then(function(postedPlaylist) {
        $scope.playlistName = "";
        console.log('posted', postedPlaylist);
         $state.go('singlePlaylist', {'id': postedPlaylist.id});
      })
      .catch($log.error);
  };


  // $scope.populateOptions = function(){
  //   return SongFactory.getAllSongs()
  //     .then(function(songs){
  //       console.log(songs);
  //       $scope.allSongs = songs;
  //     })
  //     .catch($log.error);
  // }

})

juke.controller('PlaylistCtrl', function(thePlaylist, PlayerFactory, $scope, $http, myOptions, PlaylistFactory){
  $scope.playlist = thePlaylist;
  console.log(myOptions);
  $scope.allSongs = myOptions;


  $scope.addASong = function(playlistId, song){
    PlaylistFactory.addASong(playlistId, song)
      .then(function(song){
        song.audioUrl = '/api/songs/' + song.id + '/audio';
        $scope.playlist.songs.push(song);
      })
  }

  // $scope.playSong = function(playlistId, songId){
  //   PlaylistFactory.playASong(playlistId, songId);
  // }

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    console.log('toggle', song);
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  }

})
