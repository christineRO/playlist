

let songs = ['Rivers in the Desert'];
let artists = ['Lyn Okamoto'];
let lengths = ['516'];
let images = ['https://i.ytimg.com/vi/sdDiHZiBtpE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVXJk4hO5ELcVBecX4221-bCHWWw'];
let links = ['https://www.youtube.com/watch?v=sdDiHZiBtpE'];

update();

$("#addSongInput").click(function(){
    let userSong = $("#userSongInput").val();
    songs.push(userSong);

    let userArtist = $("#userArtistInput").val();
    artists.push(userArtist);

    let userLength = $("#userLengthInput").val();
    lengths.push(userLength);

    let userImage = $("#userImageInput").val();
    images.push(userImage);

    let userLink = $("#userLinkInput").val();
    links.push(userLink);

    update();
});

function update(){
$(".songDisplay").empty();
$(".artistDisplay").empty();
$(".lengthDisplay").empty();
$(".imageDisplay").empty();
$(".linkDisplay").empty();

songs.forEach(function(song){
    $(".songDisplay").append(`<li>${song}</li>`);
});

artists.forEach(function(artist){
    $(".artistDisplay").append(`<li>${artist}</li>`);
});

lengths.forEach(function(length){
    $(".lengthDisplay").append(`<li>${length}</li>`);
});

images.forEach(function(image){
    $(".imageDisplay").append(`<li><img src = "${image}"></li>`);
});

links.forEach(function(link){
    $(".linkDisplay").append(`<li><a href = "${link}" target="_blank">Link</a></li>`);
});
};
    console.log(songs);