const bug = document.querySelector(".bug");
let X = 0;
let Y_start = 150; 
let amplitude = 50; 
let frequency = 0.02;
let speedX = 2; 

function animateBug() {
  X += speedX;
  let Y = Y_start + amplitude * Math.sin(X * frequency);

  bug.style.left = X + "px";
  bug.style.top = Y + "px";

 
  if (X < document.getElementById("fly-container").clientWidth) {
    requestAnimationFrame(animateBug);
  }
}

animateBug();
