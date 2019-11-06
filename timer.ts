export class Timer {

  contextObj;
  
  constructor(context){
    this.contextObj = context;
    this.main();
  }

  main(){
    this.contextObj.resetContext();
    this.contextObj.updateData();
    this.contextObj.draw();

    requestAnimationFrame( () => {
      this.main();
    });
  }

}
