// ignore the notes lol

/* let songs = ['Rivers in the Desert'];
let artists = ['Lyn Okamoto'];
let lengths = ['516'];
let images = ['https://i.ytimg.com/vi/sdDiHZiBtpE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVXJk4hO5ELcVBecX4221-bCHWWw'];
let links = ['https://www.youtube.com/watch?v=sdDiHZiBtpE'];
*/

let songInfo = {
    names: "Rivers in the Desertpp",
    artists: "Lyn Okamoto",
    lengths: "516",
    images: "https://i.ytimg.com/vi/sdDiHZiBtpE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVXJk4hO5ELcVBecX4221-bCHWWw",
    links: "https://www.youtube.com/watch?v=sdDiHZiBtpE"
};

let songInfoTwo = {
    names: "Rivers in the Desert",
    artists: "Lyn Okamoto",
    lengths: "516",
    images: "https://i.ytimg.com/vi/sdDiHZiBtpE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVXJk4hO5ELcVBecX4221-bCHWWw",
    links: "https://www.youtube.com/watch?v=sdDiHZiBtpE"
};

let songList = [songInfo, songInfoTwo];

console.log("WOOOOO")

$("#addSongInput").click(function(){
    let userSong = $("#userSongInput").val();
    songInfo.push(songInfo.names);

    let userArtist = $("#userArtistInput").val();
    songInfo.push(songInfo.artists);

    let userLength = $("#userLengthInput").val();
    songInfo.push(songInfo.lengths);

    let userImage = $("#userImageInput").val();
    songInfo.push(songInfo.images);

    let userLink = $("#userLinkInput").val();
    songInfo.push(songInfo.links);

    update();
});

function update(){
    $(".songDisplay").empty();
    $(".artistDisplay").empty();
    $(".lengthDisplay").empty();
    $(".imageDisplay").empty();
    $(".linkDisplay").empty();

    console.log(songList);

    songList.forEach(function(item){
        $(".songDisplay").append(`<li>${item["names"]}</li>`);
        $(".artistDisplay").append(`<li>${item["artists"]}</li>`);
        $(".lengthDisplay").append(`<li>${item["lengths"]}</li>`);
        $(".imageDisplay").append(`<li><img src = "${item["images"]}></li>`);
        $(".linkDisplay").append(`<li><a href = "${item["links"]}" target="_blank">Link</a></li>`);
        console.log("Hello");
    });
}
update();
/* songInfo.forEach(function(song){
    $(".songDisplay").append(`<li>${name}</li>`);
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
*/