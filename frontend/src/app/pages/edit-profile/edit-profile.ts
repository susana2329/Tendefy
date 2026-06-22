import { Component } from '@angular/core';
import { rejects } from 'node:assert';
import { resolve } from 'node:path';
import { OnInit } from '@angular/core';
import { EditProfileService } from '../../services/edit-profile.service';
import { UsuarioPerfil } from '../../models/infousuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile implements OnInit {
  descripcion: string = " "
  contador: number = 0
  fotos: File[] = []
  fotoPerfil!: File
  twitter: string = ``
  instagram: string = ``
  user!: UsuarioPerfil
  avatarUrl: string = ``
  fotoDefault : string = `tyler.jpg`
  constructor(private serviceeditprofile: EditProfileService) { }

  ngOnInit(): void {
    this.serviceeditprofile.getEditProfile().subscribe({
      next: (data: any) => {
        this.user = data
        this.avatarUrl = this.user.avatarUrl.url
      },
      error: error => {
        console.log(error)
      }

    })
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
      this.fotoPerfil = file[0]
    }
  }

  elementoDescripcion() {
    this.descripcion = (document.getElementById("miTexto") as HTMLTextAreaElement).value
    this.descripcion = this.descripcion
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
      form.append("cardsFotos", this.fotos[index])
      console.log(form)
    }
    form.append("fotoPerfil", this.fotoPerfil)
    form.append("descripcion", this.descripcion)
    form.append("instagram", this.instagram)
    form.append("twitter", this.twitter)
    form.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    console.log(this.twitter, this.instagram)
    this.serviceeditprofile.parchEditProfile(form).subscribe({

      next: (data: any) => {
        console.log(data)
      },
      error: error => {
        console.log(error)
      }

    })



  }
}