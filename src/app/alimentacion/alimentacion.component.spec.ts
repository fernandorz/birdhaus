import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentacionComponent } from './alimentacion.component';

describe('AlimentacionComponent', () => {
  it('Obtiene respuesta si es que se necesita mas comida', ()=>{
    let alimentacion = new AlimentacionComponent();
    expect(alimentacion.evaluarAlimentacion(0.10)).toBe(true);  
  });

  it('Obtiene respuesta si es que se necesita mas agua', ()=>{
    let agua = new AlimentacionComponent();
    expect(agua.evaluarAgua(5)).toBe(true);  
  });

  it('Obtiene respuesta si es que el abastecimiento de birdhaus no necesita atencion', ()=>{
    let abastecimiento = new AlimentacionComponent();
    expect(abastecimiento.AbastencimientoEsCorrecto(
      true, true)
    ).toBe(true);  
  });


  it('PRUEBA DE REGRESSION: Obtiene respuesta si es que el abastecimiento de birdhaus no necesita atencion', ()=>{
    let abastecimiento = new AlimentacionComponent();
    expect(abastecimiento.AbastencimientoEsCorrecto(
      abastecimiento.evaluarAlimentacion(0.70), 
      abastecimiento.evaluarAgua(7))
    ).toBe(true);  
  });


});
