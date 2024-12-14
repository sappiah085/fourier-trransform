import p5 from "p5";

export class Circle {
  _x: number;
  _y: number;
  private readonly _radius: number;

  constructor(x: number, y: number, radius: number) {
    this._x = x;
    this._y = y;
    this._radius = radius;
  }

  show(p5: p5, angle: number) {
    p5.noFill();
    p5.stroke(100);
    p5.circle(this._x, this._y, this._radius * 2);
    p5.stroke(255);
    let x = this._x + this._radius * Math.cos(angle);
    let y = this._y + this._radius * Math.sin(angle);
    p5.line(this._x, this._y, x, y);
    p5.push();
    p5.strokeWeight(5);
    p5.point(x, y);
    p5.pop();
    return { x, y };
  }
}
