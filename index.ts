import { Heatmap } from "./Heatmap";

var heatmap = new Heatmap(200, 200);
heatmap.createCanvas();
heatmap.draw();
document.getElementById("app").appendChild(heatmap.canvasElement);
