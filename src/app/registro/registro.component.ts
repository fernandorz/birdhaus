import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
interface usuario {
  correo: string;
  usuario: string;
  password: string;
}
interface usuarioid extends usuario { 
  id: string; 
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  usuariosColeccion: AngularFirestoreCollection<usuario>;
  usuarios: Observable<any[]>;

 

  constructor(private afs: AngularFirestore) {
    
  }

  ngOnInit() {
    //this.usuariosColeccion = this.afs.collection('usuarios', ref => ref.where('user','==','fernandorz'));
    this.usuariosColeccion = this.afs.collection('usuarios');
    this.usuarios  = this.usuariosColeccion.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as usuario;
        const id = a.payload.doc.id;
        
        return { id, data };
      });
    });
    
    
  }


  nuevoUsuario(e){
    e.preventDefault();
    var correo  = e.target.correousuario.value;
    var usuario = e.target.usuario.value;
    var password = e.target.password.value;
    var direccion = e.target.direccion.value;
    
    this.afs.collection('usuarios').add({'correo':correo, 'user': usuario, 'password': password, 'direccion': direccion});
    /*this.usuarios  = this.usuariosColeccion.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as usuario;
        const id = a.payload.doc.id;
        console.log(data);
        return { id, data };
      });
    });
    debugger;
    console.log('haber haber: ');
    //console.log(this.usuarios);
    //console.log(this.usuarios['0'].data.user);
    //console.log(this.usuarios['actions'].data.user);
    //console.log(this.usuarios['data'].user);
    
    console.log(this.usuarios[0].data.user);
    */
  }

  addUsuario(correo:string, usuario:string, password:string, direccion:string){
    var resultado = true;
    if(correo!="" || usuario =="" || password ==""){
      resultado = false;
    }
    if(resultado){
      this.afs.collection('usuarios').add({'correo':correo, 'user': usuario, 'password': password, 'direccion': direccion});
      return true;
    }else{
      return false;
    }
    
    
  }

}
