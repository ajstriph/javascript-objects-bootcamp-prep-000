var playlist = {artistName: "songTitle"};

var updatePlaylist = function (playlist, artistName, songTitle){
  playlist['Phil Ochs']="Here's to the State of Mississippi";
  return playlist;
}
var removeFromPlaylist = function (playlist, artistName){
  playlist = {'Kanye': "Gold Digger"};
  delete playlist.'Kanye';
  return playlist;
}
