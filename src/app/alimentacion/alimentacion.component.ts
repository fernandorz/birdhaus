import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.component.html',
  styleUrls: ['./alimentacion.component.css']
})
export class AlimentacionComponent{

  constructor() { }


  /**
   * Funcion que evalua la cantidad de comida y decide si enviar una señal
   * para activar la funcionalidad de comida si el porcentaje menor al 30%
   * @param cantidad indica la cantidad de comida en porcentaje actual
   */
  evaluarAlimentacion (cantidad : number){
    if(cantidad < 0.30){
      return true;

    }else{
      return false;

    }
  }

  /**
   * Funcion que evalua la cantidad de comida y decide si enviar una señal
   * para activar la funcionalidad de agua si la cantidad es menos a menor a 10 ml
   * @param cantidad indica la cantidad de agua actual 
   */
  evaluarAgua (cantidad : number){
    if(cantidad < 10){
      return true;

    }else{
      return false;

    }
  }

  /**
   * Funcion que evalua la cantidad de comida y decide si enviar una señal
   * para activar la funcionalidad de comida si el porcentaje menor al 30%
   * @param cantidad indica la cantidad de comida en porcentaje actual
   */
  AbastencimientoEsCorrecto (comida : boolean , agua:boolean){
    if(comida == true && agua ==true){
      return true;
    }else{
      return false;
    }
  }

}
