juke.factory("PlaylistFactory", function($http) {
  var PlaylistFactory = {}
  var myPlaylists = [];

  PlaylistFactory.addPlaylist = function(aPlaylist) {
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

  return PlaylistFactory;
})
