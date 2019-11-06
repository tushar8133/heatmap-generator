export class Canvas {
  canvasElement: HTMLCanvasElement;
  contextElement: CanvasRenderingContext2D;

  constructor(public height: number, public width: number) {
    
  }

  createCanvas() {
    this.canvasElement = document.createElement("canvas");
    this.contextElement = this.canvasElement.getContext("2d");
    this.resetCanvasSize();
  }

  resetCanvasSize() {
    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;
  }
}
