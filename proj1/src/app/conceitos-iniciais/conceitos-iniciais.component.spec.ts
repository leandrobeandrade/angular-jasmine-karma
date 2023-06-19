import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitosIniciaisComponent } from './conceitos-iniciais.component';

describe('ConceitosIniciaisComponent', () => {
  let component: ConceitosIniciaisComponent;
  let fixture: ComponentFixture<ConceitosIniciaisComponent>;

  let name: string;

  beforeEach(async () => {
    name = 'Fulano';

    console.log('beforeEach: roda cada teste por vez')

    await TestBed.configureTestingModule({
      declarations: [ ConceitosIniciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceitosIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    console.log('after: roda após cada teste por vez')
    // localStorage.removeItem('token')
  })

  beforeAll(() => {
    console.log('beforeAll: roda uma vez ')
    // localStorage.setItem('token', 'G12H127F87J****')
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ter um h1 na pagina', () => {
    // localStorage.setItem('token', '85ty5t56rtet****')
    expect(name).toContain('Fulano')
  })

});
