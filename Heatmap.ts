import { Canvas } from "./Canvas";

export class Heatmap extends Canvas{

reset() {
    // this.mainCanvasMulti.getContext("2d").clearRect(0, 0, this.mainCanvasMulti.width, this.mainCanvasMulti.height);
    // this.mainCanvasMulti.width = this.mainCanvas.width;
    // this.mainCanvasMulti.height = this.mainCanvas.height;
}

draw() {
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