import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";

import { StubComponent } from './stub.component';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubComponent ],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar para home quando clicar no botão', () => {
    component.goTo();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })

});
