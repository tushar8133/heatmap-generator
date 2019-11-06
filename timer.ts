export class Timer {

  contextObj;
  
  constructor(context){
    this.contextObj = (context)
    try{
      clearInterval(window['interval']);
    }catch(e){}

    // window['interval'] = setInterval( () => {
    //   this.main();
    // }, 1000 );

    // requestAnimationFrame( () => {
    //   console.log(new Date())
    //   this.main();
    // });
    this.main();

  }

  main(){
    console.log(new Date());
    this.contextObj.resetContext();
    this.contextObj.updateData();
    this.contextObj.draw();
    requestAnimationFrame( () => {
      this.main();
    });
  }

}
