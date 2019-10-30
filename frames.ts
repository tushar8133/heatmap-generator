export class Frames {

  paint;

  constructor(){

  }

  start(elem){
    
    setInterval(()=> {
      elem.draw();
    }, 2000);
  }


}