class Button {
    constructor(size, width, heigth, type, color) {
      this.size = size
      this.width = width
      this.heigth = heigth
      this.type = type
      this.color = color
      this.props = [size, width, heigth, type, color]
    } 
  
    onClick() {
        this.props.forEach(prop => console.log(prop))
    }
   }
  
  let button = new Button("lg", "30", "40", "submit", "green")
  
  button.onClick() 
  //update



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

  //Test Button