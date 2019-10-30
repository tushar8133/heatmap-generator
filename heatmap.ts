import { Canvas } from "./canvas";

export class Heatmap extends Canvas {
  resetContext() {
    this.contextElement.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    this.contextElement = this.canvasElement.getContext("2d");
    this.contextElement.fillStyle = "#000000";
    this.contextElement.fillRect(0, 0, this.width, this.height);
    this.contextElement.fillStyle = "green";
    this.contextElement.fillRect(50, 50, 20, 20);
    // this.drawCanvas();
    // this.resetCanvasMultiColored();
    // this.mainCanvasMulti.style.opacity = this.canvasParams.globalOpacity/100;
    // var context = this.mainCanvasMulti.getContext('2d');
    // context.drawImage(this.mainCanvas, 0, 0);
    // var imageData = context.getImageData(0, 0, this.mainCanvasMulti.width, this.mainCanvasMulti.height);
    // var data = imageData.data;
    // var opacity = 255;
    // for (var i = 0; i < data.length; i += 4) {
    //     var hslOpacity = (data[i + 3] / 255) * (-1);
    //     let temp = classMain.hslToRgb(hslOpacity, 1, 0.5);
    //     data[i + 0] = temp[0];
    //     data[i + 1] = temp[1];
    //     data[i + 2] = temp[2];
    //     data[i + 3] = (hslOpacity < (-0.3)) ? opacity : 0;
    // }
    // context.putImageData(imageData, 0, 0);
  }
}
