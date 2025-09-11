// Define the global variables: bottomImg and topImg.
let bottomImg, topImg;
let isPlaying = false;
let sounds = [];

function preload() {
  // Preload the images from the canvas's assets directory.
  // The bottomImg is the photograph with color,
  // and the topImg is the black-and-white photograph.
  bottomImg = loadImage("/assets/bigrat-color.jpg");
  topImg = loadImage("/assets/bigrat-bw.jpg");
  song = loadSound("/assets/monkeys.mp3");

  //load all sounds
  let i = 0;
  while (i < 22) {
    sounds[i] = loadSound(`/assets/sounds/sound${i + 1}.mp3`);
    i++;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Hide the cursor and replace it with a picture of
  // an eraser.
  noCursor();
  cursor("/assets/eraser.png");

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
  sounds[num].play();
  randomColor(1);
  randomColor(0);
}

function touchEnded() {
  let num = Math.floor(Math.random() * 21);
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
