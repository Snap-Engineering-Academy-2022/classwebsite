// const spotifyEmbed = document.getElementById('spotify_embed').style.display;
// const controls = document.getElementById('controls').style.display;
// const indicator = document.getElementById('indicator').style.display;

function changeImage() {
  var image = document.getElementById("play-pause");
  if (image.src.match("pause")) {
    image.src = "./icons/play-button.png";
  } else {
    image.src = "./icons/pause.png";
  }
}

// function changeEmbed(album) {
//   switch (album) {
//     case "TPAB":
//       console.log("TPAB works!");
//       spotifyEmbed = 'block';
//       controls = 'none';
//       indicator = 'none';
//       break;
//     case "ChineseFountain":
//       console.log("Chinse Fountain works!");
//       break;
//     case "DoggyStyle":
//       console.log("Doggystyle works!");
//       break;
//     case "BlankFace":
//       console.log("Blank Face works!");
//       break;
//     default:
//     // code block
//   }
// }
