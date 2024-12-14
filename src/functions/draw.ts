import p5 from "p5";
import { variables } from "../common/variables";
import { Circle } from "../classes/circle";

let time = 0;
let waves = [];
let n = 149;
export const draw = (p5: p5) => {
  p5.clear();
  let circles = [];
  let x = variables.w_grid / 5;
  let y = variables.h_grid / 2;
  for (let i = 1; i < n; i++) {
    let angle = 2 / (i * Math.PI);
    let circle = new Circle(x, y, 200 * Math.abs(angle));
    circles.push(circle);
    if (i < n - 1) {
      let c = circle.show(p5, i * time);
      x = c.x;
      y = c.y;
    }
  }
  if (circles.length) {
    let coord = circles[circles.length - 1].show(p5, circles.length * time);
    waves.unshift(coord);
    p5.beginShape();
    for (let i = 0; i < waves.length; i++) {
      p5.vertex(i + 400, waves[i].y);
    }
    p5.endShape();
    p5.line(coord.x, coord.y, 400, waves[0].y);
    if (waves.length > 500) waves.pop();
  }
  time -= 0.06;
};
