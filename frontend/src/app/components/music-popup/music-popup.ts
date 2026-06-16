import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-popup',
  imports: [],
  standalone: true,
  templateUrl: './music-popup.html',
  styleUrl: './music-popup.css',
})
export class MusicPopup {

  expanded = false

  @Input() artist = ''
  @Input() track = ''
  @Input() cover = ''


toggle(){
    this.expanded = !this.expanded
}



 close(){
      console.log("CERRAR");
      this.expanded = false
  }

};
  