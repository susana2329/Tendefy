import { Component } from '@angular/core';


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
  error: boolean = false
  usuario = {
    nombre: " ",
    edad: 0,
    descripcion: " ",
    redesSociales: {
      twitter: " ",
      instagram: " "
    },
    arrayDeFotos: [],
    fotoPerfil: "mma.jpg"
  }
  elementoDescripcion() {
    this.descripccion = (document.getElementById("miTexto") as HTMLTextAreaElement).value
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
}
