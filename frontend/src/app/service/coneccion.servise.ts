import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ConeccionServise {
  private _url = `http://localhost:3000`

  constructor(private http : HttpClient){}


  patchUser(id: string):void{
    

  }

}
