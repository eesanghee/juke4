'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('newPlaylist', {
    url: '/playlist/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: "PlaylistCreator"
  })
  .state('singlePlaylist', {
    url:'/playlists/:id',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      thePlaylist: function(PlaylistFactory, $stateParams, $http) {
        // if($stateParams.id === "") {
        //   return PlaylistFactory.
        // } else {
          return PlaylistFactory.getAPlaylist($stateParams.id);
        // }
      },
      myOptions: function(SongFactory, $http){
        return SongFactory.getAllSongs();
      }
    }
  })
})
