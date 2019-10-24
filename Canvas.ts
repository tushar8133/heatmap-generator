export class Canvas {
  canvasElement: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  contextData: Object;
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  createCanvas() {
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.setAttribute("height", String(this.height));
    this.canvasElement.setAttribute("width", String(this.width));
  }

  setContext() {
    this.context = this.canvasElement.getContext("2d");
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, 200, 200);
    this.context.fillStyle = "grey";
    this.context.fillRect(0, 0, 20, 20);
  }
}
