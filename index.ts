import { Heatmap } from "./heatmap";
import { HeatmapController } from './heatmap-controller';
import { Frames } from './frames';

var heatmap = new Heatmap(200, 200);
heatmap.createCanvas();
document.getElementById("app").appendChild(heatmap.canvasElement);
// heatmap.draw()


var heatmapController:HeatmapController = new HeatmapController();
var frames:Frames = new Frames();
frames.start(heatmap);