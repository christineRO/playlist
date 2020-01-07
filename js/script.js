

let songs = ['Rivers in the Desert'];
let artists = ['Lyn Okamoto'];
let lengths = ['516'];
let images = ['https://i.ytimg.com/vi/sdDiHZiBtpE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVXJk4hO5ELcVBecX4221-bCHWWw'];
let links = ['https://www.youtube.com/watch?v=sdDiHZiBtpE'];

songs.forEach(function(song){
    $(".playlistDisplay").append(`<li>${song}</li>`);
});

artists.forEach(function(artist){
    $(".playlistDisplay").append(`<li>${artist}</li>`);
});

lengths.forEach(function(length){
    $(".playlistDisplay").append(`<li>${length}</li>`);
});

images.forEach(function(image){
    $(".playlistDisplay").append(`<li><img src = "${image}"></li>`);
});

links.forEach(function(link){
    $(".playlistDisplay").append(`<li><a href = "${link}" target="_blank">Link</a></li>`);
});

$("#addSong").click(function(){
    let userSong = $("#userSong").val();
    songs.push(userSongs);

    let userArtist = $("#userArtist").val();
    artists.push(userArtist);

    let userLength = $("#userLength").val();
    lengths.push(userLength);

    $("#userImage").val();
    $("#userLink").val();
});

    
    
    
    images.push(userImage);
    links.push(userLink);

    console.log(songs);