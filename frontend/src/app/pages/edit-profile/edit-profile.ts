import { Component } from '@angular/core';
import { error } from 'node:console';
import { ObjectEncodingOptions } from 'node:fs';

@Component({
  selector: 'app-edit-profile',
  imports: [],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {
  valor: string = " "
  contador: number = 0
  fotos: File[] = []
  error: boolean = false

  ola(event: Event): void {
    const valor = (event.target as HTMLInputElement).value
    console.log(valor)
    if (valor) {
      this.contador = valor.length
    }
    if (valor == "") {
      this.contador = 0
    }
  }

  imagen(event: Event): void {
    const eventimg = (event.target as HTMLInputElement).files

    if (eventimg == null || eventimg == undefined) {
      console.log("toca para alla")
    }
    else {
      for (let i = 0; i < eventimg.length; i++) {

        this.fotos.push(eventimg[i])
      }

    }
  }


  buttoninputfile() {
    const input = document.getElementById("inputFileimg")
    input?.click()
  }


  borrarImagen(foto: File) {
    for (let i = 0; i < this.fotos.length; i++) {
      if (foto == this.fotos[i]) {
        console.log(this.fotos.splice(i, 1))
      }
    }
  }
  usuario = {
    nombre: "tobias",
    edad: 21,
    descripcion: "Hola mundo",
    foto: "mma.jpg",
    fotos: [" "]

  }

}
