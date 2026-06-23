import { Component, HostListener, OnInit } from '@angular/core';
import {MusicPopup} from '../../components/music-popup/music-popup'
import profiles from './profiles.json'
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';  
import { MatchingService } from '../../services/matching.service';
import { subscribe } from 'diagnostics_channel';


  @Component({
    selector: 'app-home',
    imports: [MusicPopup],
    templateUrl: './home.html',
    styleUrl: './home.css',
  })

  export class Home implements OnInit{

    constructor(
    private cdr: ChangeDetectorRef,
    private matchingService: MatchingService
){}

ngOnInit(){
  this.matchingService.getProfiles().subscribe({
  next: (data: any) => {
    

    this.profiles = data.map((user: any) => {
      console.log(this.profiles);
        return {  
      id:user.id,
      
      name: user.nombre,
      age: user.edad,
      description: user.descripcion,
      compatibility: Math.round(user.compatibilidad),
      

      pics: (user.fotos ?? [])
        .filter((foto: any) => foto?.url)
        .map((foto: any) => foto.url),

      
   artists: (user.topArtists ?? [])
  .slice(0, 2)
  .map((artist: any) => artist.nombre),

      location: user.ubicacion ?? "",
   currentArtist: "",
currentTrack: "",
currentCover: ""
    }});
console.log("artsu")
console.log(data[0].topArtists);


  }
});

}
  
    profiles: any[] = [];
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

  const profile = this.profiles[this.currentProfile];

  console.log("LIKE A:");
  console.log(profile.name);
  console.log(profile.id);

  this.matchingService.like(profile.id)
    .subscribe({
      next: () => {
        this.nextProfile(1);
      },
      error: (err) => {
        console.error(err);
      }
    });
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