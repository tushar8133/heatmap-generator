import { Canvas } from "./Canvas";

class Heatmap{

  canvas:Canvas;

  constructor(){
    this.canvas = new Canvas(200, 200);
    this.canvas.createCanvas();
    this.canvas.setContext();
    console.log(this.canvas);
    document.getElementById("app").appendChild(this.canvas.canvasElement);
    
  }

}

var aa = new Heatmap();