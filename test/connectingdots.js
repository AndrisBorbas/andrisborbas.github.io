var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var timer = 0;

var stars = [], // Array that contains the stars
  FPS = 60, // Frames per second
  x = Math.floor(canvas.width * canvas.height / 10000), // Number of stars
  mouse = {
    x: 0,
    y: 0
  }; // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius * 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if (distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.056;
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

function distance(point1, point2) {
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    // Wrap around
    if (s.x < 0 || s.x > canvas.width)
      s.x = Math.abs((s.x - canvas.width));
    if (s.y < 0 || s.y > canvas.height)
      s.y = Math.abs((s.y - canvas.height));
  }
}

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function randomVelocity(even) {
  var dirx = Math.random() < 0.5 ? -1 : 1;
  var diry = Math.random() < 0.5 ? -1 : 1;
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.vx = (Math.floor(Math.random() * 300) - 150) * dirx;
    s.vy = (Math.floor(Math.random() * 300) - 150) * diry;
    /*
    if (even) {
      s.vx = (Math.floor(Math.random() * 200) + 100) * dirx;
      s.vy = (Math.floor(Math.random() * 200) + 100) * diry;

    } else {
      s.vx = (Math.floor(Math.random() * 30) - 15) * dirx;
      s.vy = (Math.floor(Math.random() * 30) - 15) * diry;
    }
    */
  }

}

var even = true;

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);

  if (timer == 26) {
    timer = 0;
    if (even == true) {
      even = false;

    } else {
      even = true;
      //timer = 17;
    }
    randomVelocity(even);

  } else {
    timer++;
  }

}

tick();