import { Component } from '@angular/core';
import { rejects } from 'node:assert';
import { resolve } from 'node:path';


@Component({
  selector: 'app-edit-profile',
  imports: [],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {
  descripccion: string = " "
  contador: number = 0
  fotos: File[] = []
  fotoPerfil!: File

  abrirInputProfile() {
    const inputFile = document.getElementById("inputProfile") as HTMLInputElement
    inputFile?.click()
  }
  selecFotoProfile() {
    const file = (document.getElementById("inputProfile") as HTMLInputElement).files
    if (!file) {
      console.log("No selecciono ninguna foto")
    }
    else {
      this.fotoPerfil = file[0]
    }
  }



  elementoDescripcion() {
    this.descripccion = (document.getElementById("miTexto") as HTMLTextAreaElement).value
    this.descripccion = this.descripccion
    console.log(this.descripccion)
    if (this.descripccion) {
      this.contador = this.descripccion.length
    }
    else {
      this.contador = 0
    }
  }

  imagen() {
    const eventimg = (document.getElementById("inputFileimg") as HTMLInputElement).files
    if (!eventimg) {
      console.log("toca para alla")
    }
    else {
      for (let i = 0; i < eventimg.length; i++) {
        if (this.fotos.length < 5) {
          this.fotos.push(eventimg[i])
          console.log(eventimg[i])
        }
        else {
          console.log(eventimg[i])
          break
        }
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
        this.fotos.splice(i, 1)
      }
    }
  }

  actualizarDatos() {
    const form = new FormData()
    
    for (let index = 0; index < this.fotos.length; index++) {
      form.append("fotoCards", this.fotos[index])
      console.log(form)
    }
    form.append("fotoProfile", this.fotoPerfil)
    form.append("instagram", this.instagram)
    form.append ("twitter", this.twitter)
        form.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

  }
}


