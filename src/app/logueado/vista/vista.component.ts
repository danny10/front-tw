import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario/usuario.module';
import { UsuariosService } from '../../servicios/usuarios.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styles: []
})
export class VistaComponent implements OnInit {
  
  usuarios: Usuario[]=[];
  cargando: boolean = true;

  constructor( public _usuarioServices:UsuariosService,
    @Inject(DOCUMENT) private document: any ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  //Usuarios logueados
  cargarUsuarios(){
    this.cargando =true;
    this._usuarioServices.cargarUsuarios()
        .subscribe( (resp:any) =>{
          this.cargando=false;
          this.usuarios= resp.userlist;
        });
  }
  
  //Elimina el usuario una vez haga logout
  borrarDatos(){
    this._usuarioServices.borrarRegistro()
        .subscribe(borrado =>{
          console.log('Elimino registro')

        });
  }

  //Cerrar session
  Logout(): void {
    this.document.location.href = 'http://localhost:3000/logout';
    this.borrarDatos();
  }


}

