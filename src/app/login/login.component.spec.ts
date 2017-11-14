import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent, loginComponentTesting } from './login.component';

describe('LoginComponent', () => {


  it('Debe de Loggear un nuevo usuario', ()=>{
    let logg = new loginComponentTesting();
    expect(logg.loginUsuario('usuario1@mail.com','usuario1' ,'acceso1' )).toBe(true);

  });

  it('NO Debe de Loggear un nuevo usuario', ()=>{
    let logg2 = new loginComponentTesting();
    expect(logg2.loginUsuario('fernandorz911@gmail.com', 'fernandorz', 'acceso123')).toBe(false);
    
  });

});
