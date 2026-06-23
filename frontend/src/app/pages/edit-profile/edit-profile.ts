import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EditProfileService } from '../../services/edit-profile.service';
import { UsuarioPerfil } from '../../models/infousuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { setTimeout } from 'node:timers/promises';
@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile implements OnInit {
  descripcion: string = ""
  contador: number = 0
  fotos: File[] = []
  fotoPerfil!: File
  twitter: string = ``
  instagram: string = ``
  user!: UsuarioPerfil
  urlImagen: string[] = []
  edad: string = ``
  avatarUrl: string = ``
  name: string = ``
  constructor(private serviceeditprofile: EditProfileService, private router: Router) { }

  ngOnInit(): void {
    this.getuser()

  }
  getuser() {
    this.serviceeditprofile.getEditProfile().subscribe({
      next: (data: any) => {
        this.user = data
        this.avatarUrl = data.avatarUrl.url
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
          this.urlImagen = this.fotos.map(file => URL.createObjectURL(file))
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


  borrarImagen(foto: string) {
    for (let i = 0; i < this.urlImagen.length; i++) {
      if (foto == this.urlImagen[i]) {
        this.urlImagen.splice(i, 1)
        this.fotos.splice(i, 1)
        console.log(this.fotos)
      }
    }
  }

  actualizarDatos() {
    const form = new FormData()
    for (let i = 0; i < this.fotos.length; i++) {
      form.append("cardsFotos", this.fotos[i])
    }
    if (this.name) {
      form.append("nombre", this.name)
    }
    if (this.edad) {
      form.append("edad", this.edad)
    }
    if (this.descripcion) {
      form.append("descripcion", this.descripcion)
    }
    if (this.instagram) {
      form.append("instagram", this.instagram)
    }
    if (this.twitter) {
      form.append("twitter", this.twitter)
    }
    form.append("fotoPerfil", this.fotoPerfil)
    this.patchUser(form)
    this.fotos = []
    this.router.navigate(['/app/perfil-personal']);
  }


  patchUser(form: FormData) {
    this.serviceeditprofile.parchEditProfile(form).subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  cerrarSesion(): void {
    console.log()
    localStorage.removeItem('token');
    this.router.navigate([`/login`])
  }
}
