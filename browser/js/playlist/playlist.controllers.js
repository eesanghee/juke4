
  console.log("PC Here!")

juke.controller('PlaylistCreator', function($scope, $http, PlaylistFactory, $log){

  console.log("PC Here!")

  $scope.addToPlaylist = function(aPlaylist) {
    console.log("Button Clicked!");
    var newPlaylist = {};
    newPlaylist.name = aPlaylist;
    console.log(newPlaylist);
    PlaylistFactory.addPlaylist(newPlaylist)
      .then(function(postedPlaylist) {
        $scope.playlistName = "";
      })
      .catch($log.error);
  }

})

juke.controller('PlaylistCtrl', function(thePlaylist, $scope){
  $scope.playlist = thePlaylist;
})
