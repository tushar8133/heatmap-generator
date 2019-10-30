import { Heatmap } from './heatmap';

export class Frame {
  heatmap:Heatmap = new Heatmap();
  constructor(){
    
    this.init();
  }

  init(){
    setInterval( ()=> {
      requestAnimationFrame();
    }, 1000)
    
  }


}