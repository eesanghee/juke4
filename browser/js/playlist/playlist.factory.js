juke.factory("PlaylistFactory", function($http) {
  var PlaylistFactory = {}
  var myPlaylists = [];

  PlaylistFactory.addPlaylist = function(aPlaylist){
    myPlaylists.push(aPlaylist);
    return $http.post('/api/playlists', aPlaylist)
    .then(function(response){
      return response.data;
    });
  }

  PlaylistFactory.getPlaylists = function() {
    return $http.get('api/playlists')
    .then(function(res){
      angular.copy(res.data, myPlaylists);
      return myPlaylists;
    });
  }

  PlaylistFactory.getAPlaylist = function(id) {
    return $http.get('api/playlists/' + id)
    .then(function(res){
      return res.data;
    });
  }

  PlaylistFactory.addASong = function(playlistId, song){
    return $http.post('/api/playlists/' + playlistId + '/songs', song)
    .then(function(res){
      return res.data;
    })
    .then(function(res) {
          console.log("Added Song: ");
          console.log('res', res);
          console.log('playlist', myPlaylists);
          for (var i = 0; i < myPlaylists.length; i++) {
            if (playlistId === myPlaylists[i].id){
              console.log('here i am', myPlaylists[i]);
              console.log(myPlaylists[i]);
              angular.copy(res, myPlaylists[i].songs);
            }
          }
          return res;
    })

  }

  PlaylistFactory.playASong = function(playlistId, songId) {
    return $http.get('/api/playlists' + playlistId + '/songs/' + songId)
    .then(function(res){
      return res.data;
    });
  }


  return PlaylistFactory;
})
