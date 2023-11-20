class Button {
    constructor(size,width,height,type,color){
    this.sizeButton = size;
    this.widthButton = width;
    this.heightButtom = height;
    this.typeButton = type;
    this.colorButton = color;
    
    }
    button.onClick(){
        this.props.forEach(prop => console.log(prop))
    }
 

    let button = new Button("Small", "2 cm", "1 cm", "button", "green");
    button.onClick((props) => {
      console.log(props);
    });



    class Button {
        constructor(size, width, height, type, color) {
          this.sizeButton = size;
          this.widthButton = width;
          this.heightButton = height;
          this.typeButton = type;
          this.colorButton = color;
        }
      
        onClick(callback) {
          callback(this);
        }
      }
      
      function testButton() {
        let button = new Button("Small", "2 cm", "1 cm", "button", "green");
        button.onClick((buttonInstance) => {
          console.log(buttonInstance);
        });
      }
      
      testButton();
//let button = [
//    new Button("Small","2 cm","1 cm","buttom","green","on Click")
//]



  // onClick(callback){
   //     callback(button.props);
  //      };
  //  }