import { Component, OnInit} from '@angular/core';
import { rejects } from 'node:assert';
import { resolve } from 'node:path';



@Component({
  selector: 'app-edit-profile',
  imports: [],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile implements OnInit{
  descripcion: string = " "
  contador: number = 0
  error: boolean = false
  fotos: File[] = []
  fotoDefect: string = `../../../../public/tyler.jpg`
  fotoUser!: File
  nombreFoto: string = ``

  ngOnInit(): void {
    
  }
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
      this.fotoUser = file[0]
      this.preview(this.fotoUser,"imagenPerfil")
      console.log(this.fotoUser)
      console.log(this.fotoUser)

    }
  }



  elementoDescripcion() {
    let result = (document.getElementById("miTexto") as HTMLTextAreaElement).value
    this.descripcion = result
    console.log(this.descripcion)
    if (this.descripcion) {
      this.contador = this.descripcion.length
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
          this.preview(this.fotos[0], "imgcard")
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
  preview(file: File, img: string) {
    let imeg = document.getElementById(img) as HTMLImageElement
    imeg.src = URL.createObjectURL(file)
  }
  mandarInfo(){ 
    
    let formdata = new FormData()
    formdata.append("fotoPerfil", this.fotoUser)

  }
}


