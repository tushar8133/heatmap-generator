import { Heatmap } from "./heatmap";
import { HeatmapController } from './heatmap-controller';
import { Timer } from './timer';

var heatmap = new Heatmap(200, 200);
heatmap.createCanvas();
document.getElementById("app").appendChild(heatmap.canvasElement);

var heatmapController:HeatmapController = new HeatmapController();
var timer = new Timer(heatmap);
