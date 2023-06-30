import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonComponent } from './spyon.component';

describe('SpyonComponent', () => {
  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Espionando métodos do componente
  it('Deve logar usuario no sistema ao clicar no botão', () => {
    let spiedComponent = spyOn(component, 'isLogged').and.callThrough();

    component.isLogged();

    expect(spiedComponent).toHaveBeenCalledTimes(1);
    expect(component.logged).toBe(true);
  });

  // Espionando propriedades do componente
  it('Deve retornar a mensagem correta', () => {
    const mensagem = 'Olá, Mundo!';

    spyOnProperty(component, 'message', 'get').and.returnValue(mensagem);

    expect(component.message).toEqual(mensagem);

  })

});
