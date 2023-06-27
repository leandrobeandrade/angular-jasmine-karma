import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitConceptsComponent } from './init-concepts.component';

describe('ConceitosIniciaisComponent', () => {
  let component: InitConceptsComponent;
  let fixture: ComponentFixture<InitConceptsComponent>;

  let name: string;

  beforeEach(async () => {
    name = 'Fulano';

    console.log('beforeEach: roda cada teste por vez');

    await TestBed.configureTestingModule({
      declarations: [ InitConceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    console.log('after: roda cada vez após cada teste');
    // localStorage.removeItem('token')
  })

  beforeAll(() => {
    console.log('beforeAll: roda uma vez a cada teste');
    // localStorage.setItem('token', 'G12H127F87J****')
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ter um h1 na pagina', () => {
    // localStorage.setItem('token', '85ty5t56rtet****')
    expect(name).toContain('Fulano');
  })

});
