export class Canvas {

  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  contextData: Object;
  height: number;
  width: number;
  
  constructor(height: number, width: number){
    this.height = height;
    this.width = width;
  }

  createCanvas(){
    this.element = document.createElement("canvas");
    this.element.setAttribute("height", String(this.height));
    this.element.setAttribute("width", String(this.width));
  }

  setContext(){
    this.context = this.element.getContext("2d");
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, 200, 200);
    this.context.fillStyle = "grey";
    this.context.fillRect(0, 0, 20, 20);
  }

}
