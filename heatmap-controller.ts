export class HeatmapController {
  constructor(){
    this.initControls();
  }

  initControls(){
    var slider1:HTMLElement = document.getElementById("slider1");
    slider1.addEventListener("input", (event) => {
      console.log(event.target);
    });
  }
}