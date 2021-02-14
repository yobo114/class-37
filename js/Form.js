class Form {
  constructor() {
    this.title = createElement('h2')
    this.button =  createButton('Play')
    this.input = createInput("Name")
    this.greeting = createElement('h3')
  }

  display(){
   this.title.html("Car'><'Racing'><'Gt");
   this.title.position(130, 0);
    
    
    this.input.position(130, 160);
   this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello racer ! " + player.name )
      this.greeting.position(130, 160)
    });

  }
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
    
  }
}
