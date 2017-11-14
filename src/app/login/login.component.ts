import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface usuario {
  correo: string;
  usuario: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuariosColeccion: AngularFirestoreCollection<usuario>;
  usuarios: Observable<usuario[]>;
  
  constructor(private router:Router, private user:UserService,private afs: AngularFirestore ) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	
  	var usuario = e.target.usuario.value;
    var password = e.target.password.value;
    this.usuariosColeccion = this.afs.collection('usuarios', ref => ref.where('user','==','fernandorz'));
    this.usuarios  = this.usuariosColeccion.valueChanges();
    console.log(this.usuarios);
    if(this.usuarios[0]!=null){
      var objUsuario = this.usuarios[0];
      if(usuario == objUsuario.user && password == objUsuario.password) {
        this.user.setUserLoggedIn(usuario);
        this.router.navigate(['home']);
      }

    }else{
      console.log('usuario: '+ usuario + ' no ha sido registrado');
    }
  }


  

}

export class loginComponentTesting{
 

  public loginUsuario (correo: string, usuario:string , password: string){
    if(correo != "fernandorz911@gmail.com"){
      return true;
    }else{
      return false;
    }  
    
  }

}
