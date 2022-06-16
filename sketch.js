let myButton = new Clickable();
let isPlaying = true;
let numBalls = 13;
let spring = 0.1;
let gravity = 0.0;
let friction = -0.9;
let balls = [];
const colors = ['aqua', 'orange', 'lightgreen', 'pink', 'peachpuff', 'tomato']
let students = [
  {
    urlPath: '/baker',
    name: 'Baker'
  },
  {
    urlPath: '/jenny',
    name: 'Jenny'
  },
  {
    urlPath: '/Elias',
    name: 'Elias'
  },
  {
    urlPath: '/vanessa',
    name: 'Vanessa'
  },
  {
    urlPath: '/beasley',
    name: 'Ashley'
  },
  {
    urlPath: '/phoenix',
    name: 'Phoenix'
  },
  {
    urlPath: '/andy',
    name: 'Andy'
  },
  {
    urlPath: '/Jonathan',
    name: 'Jonathan'
  },
  {
    urlPath: '/asarel',
    name: 'Asarel'
  },
  {
    urlPath: '/anthony',
    name: 'Anthony'
  },
  {
    urlPath: '/sonya',
    name: 'Sonya'
  },
  {
    urlPath: '/classwebsite', // bruh what
    name: 'Trung'
  },
  {
    urlPath: '/andres',
    name: 'Andres'
  },
  {
    urlPath: '/alexis',
    name: 'Alexis'
  },
  {
    urlPath: '/amanuelR',
    name: 'Amanuel'
  },
  {
    urlPath: '/Ingrid',
    name: 'Ingrid'
  },
  {
    urlPath: '/yasenA',
    name: 'Yasen'
  },
  {
    urlPath: '/sophie',
    name: 'Sophie'
  },
  {
    urlPath: '/rainawan',
    name: 'Raina'
  }
]

function setup() {
  createCanvas(1000, 600);
  students = shuffle(students);
  
  for (let i = 0; i < students.length; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(100, 120),
      i,
      balls
    );
  }
  noStroke();
  fill(150);
  myButton.text = "Pause";
  myButton.textSize = 16;
  myButton.locate(20, 20);        //Position Button
  myButton.onPress = function(){  //When myButton is pressed
    isPlaying = !isPlaying;
    this.text = isPlaying ? "Pause" : "Play";
  }
  myButton.onHover = function () {
    this.color = "#CCC";
  }
  myButton.onOutside = function () {
    this.color = "#FFF";
  }
}

function draw() {
  if (isPlaying) {
    background(255);
    balls.forEach(ball => {
      ball.collide();
      ball.move();
      ball.display();
    });
  }
  myButton.draw();
  runGUI();
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
    this.diameter = din;
    this.id = idin;
    this.others = oin;
    this.link = createA(students[idin].urlPath, students[idin].name);
    this.colorIndex = floor(random(0, colors.length));
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax * 0.8;
        this.vy -= ay * 0.8;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
    
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    fill(colors[this.colorIndex])
    ellipse(this.x, this.y, this.diameter, this.diameter);
    this.link.position(this.x - this.link.elt.clientWidth/2, this.y - this.link.elt.clientHeight/2);
  }
}
