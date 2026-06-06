import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})








export class Home {

  cardX:number = 0;
  startX: number = 0;
  rotation = this.cardX / 20;
  dragging = false



transformStyle(){
  return `translateX(${this.cardX}px) rotate(${this.cardX / 50}deg)`
}
 startDrag(event: MouseEvent){

    console.log("start", event.clientX);

    this.dragging = true;
    this.startX = event.clientX;
}

  endDrag(){
    this.dragging=false
    

    if(this.cardX > 150){
      console.log("like")
    }

    else if(this.cardX < -150){
      console.log("dislike")
    }
    this.cardX = 0
  
  }


  moveCard(event : MouseEvent){

    if(!this.dragging){
        return;
    }

 


    const flag:number = event.clientX - this.startX;

    this.cardX = Math.max(-100,Math.min(100, flag))
}

  profile = {
    name: 'Khabib',
    age: 21,
    location: 'Buenos Aires',
    description: 'Amo pelear y la musica',
    pic: '/khabib.jpg',
    artists: [
  'Duki',
  'Slipknot'],
  currentArtist: "Airbag" 
  };
}
