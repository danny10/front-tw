import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario/usuario.module';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  usuarios:Usuario;

  constructor(
    public http:HttpClient,
    public router:Router) { }
    
    //listado de usuarios
    cargarUsuarios (){
      let url = 'http://localhost:3000/listUser';
      return this.http.get( url );
    }
    
    //Login
    Logintw (){
      let url = 'http://localhost:3000/auth/twitter';
      return this.http.get( url );
    }
    
    //eliminar registro de la base datos
    borrarRegistro(){
      let url = 'http://localhost:3000/listUser/delete';

      return this.http.delete( url ).pipe(map( resp =>{
        return true; 
      }));
      
    }
}


