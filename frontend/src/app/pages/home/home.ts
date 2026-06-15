  import { Component, HostListener} from '@angular/core';
  import {MusicPopup} from '../../components/music-popup/music-popup'
  import profiles from './profiles.json'
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';  

  @Component({
    selector: 'app-home',
    imports: [MusicPopup],
    templateUrl: './home.html',
    styleUrl: './home.css',
  })
  export class Home {

    constructor(
    private cdr: ChangeDetectorRef
){}
  
    profiles = profiles
    cardX:number = 0;
    startX: number = 0;
    currentProfile: number = 0
    rotation = this.cardX / 20;
    dragging = false
    currentPic = 0
    noMoreProfiles:boolean = false
    
@ViewChild(MusicPopup)
musicPopup!: MusicPopup;

@HostListener('window:mousemove',['$event'])
onMouseMove(event: MouseEvent){
      this.moveCard(event)
    }
    
@HostListener('window:mouseup')
onMouseUp(){
  this.endDrag();
}
  transformStyle(){
    return `translateX(${this.cardX}px) rotate(${this.cardX / 10}deg)`
  }
  startDrag(event: MouseEvent){
    this.musicPopup?.close();


      console.log(this.cardX, event.clientX, "soy start drag btw");

      this.dragging = true;
      this.startX = event.clientX;
      
 
  }


    endDrag(){
      this.dragging=false
      
      console.log("soy end drag")

      if(this.cardX > 150){100
        this.nextProfile(1)
        return
      }

      if(this.cardX < -150){
        this.nextProfile(-1)
        return
      }

    
    this.cardX = 0;
    this.dragging = false


    
    }

    moveCard(event : MouseEvent){

      if(!this.dragging){
          return;
      }
      
      console.log('drag')
      const flag:number = event.clientX - this.startX;

      this.cardX = Math.max(-300,Math.min(300, flag))
  }

nextProfile(direction: number){

    if(direction > 0){
      this.cardX = 1000;
    }else{
      this.cardX = -1000;
    }
   
        this.currentProfile++;
        this.currentPic = 0
        this.cardX = 0;

 
}

  like(){
          this.musicPopup?.close();

         
        
    this.nextProfile(1)
  }

  dislike(){
          this.musicPopup?.close();
      
    this.nextProfile(-1)
  }


  nextPic(){  
    const photos = this.profiles[this.currentProfile].pics

    if( this.currentPic < photos.length -1){
      this.currentPic++
    }
  }

  previusPic(){

    if(this.currentPic > 0){
      this.currentPic--
      console.log("anterior")

    }

  }



  
  }