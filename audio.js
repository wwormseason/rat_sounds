// Declare variable to store audio player
let audioPlayer;

function setup() {
  // Remove canvas
  noCanvas();

  // Create audio player using path to audio file
  // This can also be a URL for a public file
  // On the p5 Editor, a file may be uploaded to Sketch Files
  // by clicking the > button on the upper left, followed by the + button
  audioPlayer = createAudio("/assets/rats.mp3");
  yay = loadSound("/assets/confetti.mp3");
  confetti = loadImage("/assets/confetti-top.gif");

  // Add description for assistive technologies to explain playback speed
  audioPlayer.attribute(
    "aria-description",
    "The playback speed of this audio player is controlled by the position of the mouse. The further to the right the mouse is, the faster the audio will play. This audio player plays the Rats, Rats, We're the Rats song."
  );

  // Display player controls
  audioPlayer.showControls();
}

function draw() {
  // Set playback speed to 1-2x normal based on mouse position
  // audioPlayer.speed(1 + mouseX / windowWidth);

  // Map mouseX from 0–windowWidth to a playback speed of 0.25–4
  let speed = map(mouseX, 0, windowWidth, 0.25, 4);

  // Clamp the value in case the mouse goes outside the window
  speed = constrain(speed, 0.25, 4);

  audioPlayer.speed(speed);

  if (audioPlayer.duration() - audioPlayer.time() === 0) {
    yay.play();
    image(confetti, 50, 50);
    confetti2 = createImg("/assets/confetti-top.gif");
    confetti2.position(0, 20);
    noLoop();
  }
}
