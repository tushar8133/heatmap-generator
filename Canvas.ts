export class Canvas {
  canvasElement: HTMLCanvasElement;
  contextElement: CanvasRenderingContext2D;
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
    this.contextElement = this.canvasElement.getContext("2d");
    this.contextElement.fillStyle = "#000000";
    this.contextElement.fillRect(0, 0, 200, 200);
    this.contextElement.fillStyle = "grey";
    this.contextElement.fillRect(0, 0, 20, 20);
  }

  reset() {
    // this.mainCanvasMulti.width = this.mainCanvas.width;
    // this.mainCanvasMulti.height = this.mainCanvas.height;
  }
}
