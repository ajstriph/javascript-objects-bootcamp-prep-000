var playlist = {artistName: "songTitle"};

var updatePlaylist = function (playlist, artistName, songTitle){
  playlist[artistName]="songTitle";
  return playlist;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
