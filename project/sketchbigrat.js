// Define the global variables: bottomImg and topImg.
let bottomImg, topImg;
let isPlaying = false;
let sounds = [];

function preload() {
  // Preload the images from the canvas's assets directory.
  // The bottomImg is the photograph with color,
  // and the topImg is the black-and-white photograph.
  bottomImg = loadImage("./assets/bigrat-color.jpg");
  topImg = loadImage("./assets/bigrat-bw.jpg");
  song = loadSound("./assets/monkeys.mp3");

  //load all sounds
  sounds[0] = loadSound("./assets/sounds/sound1.mp3");
  sounds[1] = loadSound("./assets/sounds/sound2.mp3");
  sounds[2] = loadSound("./assets/sounds/sound3.mp3");
  sounds[3] = loadSound("./assets/sounds/sound4.mp3");
  sounds[4] = loadSound("./assets/sounds/sound5.mp3");
  sounds[5] = loadSound("./assets/sounds/sound6.mp3");
  sounds[6] = loadSound("./assets/sounds/sound7.mp3");
  sounds[7] = loadSound("./assets/sounds/sound8.mp3");
  sounds[8] = loadSound("./assets/sounds/sound9.mp3");
  sounds[9] = loadSound("./assets/sounds/sound10.mp3");
  sounds[10] = loadSound("./assets/sounds/sound11.mp3");
  sounds[11] = loadSound("./assets/sounds/sound12.mp3");
  sounds[12] = loadSound("./assets/sounds/sound13.mp3");
  sounds[13] = loadSound("./assets/sounds/sound14.mp3");
  sounds[14] = loadSound("./assets/sounds/sound15.mp3");
  sounds[15] = loadSound("./assets/sounds/sound16.mp3");
  sounds[16] = loadSound("./assets/sounds/sound17.mp3");
  sounds[17] = loadSound("./assets/sounds/sound18.mp3");
  sounds[18] = loadSound("./assets/sounds/sound19.mp3");
  sounds[19] = loadSound("./assets/sounds/sound20.mp3");
  sounds[20] = loadSound("./assets/sounds/sound21.mp3");
  sounds[21] = loadSound("./assets/sounds/sound22.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Hide the cursor and replace it with a picture of
  // an eraser.
  noCursor();
  cursor("./assets/eraser.png");

  // Load the top image (the black-and-white image).
  image(topImg, 0, 0);
  song.loop();
  getAudioContext().suspend();
}

function mouseDragged() {
  // Using the copy() function, copy the bottom image
  // on top of the top image when you drag your cursor
  // across the canvas.
  copy(bottomImg, mouseX, mouseY, 40, 40, mouseX, mouseY, 40, 40);

  if (!isPlaying) {
    userStartAudio();
    isPlaying = !isPlaying;
  }
}

function mouseClicked() {
  let num = Math.floor(Math.random() * 21);
  sounds[num].play();
  randomColor(0);
  randomColor(1);
}

function keyPressed() {
  let num = Math.floor(Math.random() * 21);
  console.log(num);
  sounds[num].play();
  randomColor(1);
  randomColor(0);
}

function randomColor(l) {
  let letters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = ["#"];
  for (var i = 0; i < 6; i++) {
    color.push(letters[Math.floor(Math.random() * 16)]);
  }
  let newcolor = color.join("");
  if (l < 1) {
    document.body.style.backgroundColor = newcolor;
  } else {
    let text = document.getElementById("text");
    text.style.color = newcolor;
  }
}
