'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('newPlaylist', {
    url: '/playlist/new',
    templateUrl: '/js/playlist/templates/playlist_form.html',
  })
})
