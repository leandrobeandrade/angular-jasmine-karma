import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1,2,3]).toEqual([1, 2, 3]);
  })

  it('Deve testar o uso do matcher toBe', () => {
    let names1 = ['Fulano', 'Beltrano', 'Ciclano'];
    let names2 = ['Fulano', 'Beltrano', 'Ciclano'];

    let age = 10;

    expect(age).toBe(10);
  })


  it('Deve testar o uso do matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
  })


  it('Deve testar o uso do matcher tobeFalsy', () => {
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  })

  it('Deve testar o uso do matcher toBeTrue', () => {
    expect(true).toBeTrue();
  })

  it('Deve testar o uso do matcher toBeFalse', () => {
    expect(false).toBeFalse();
  })

  it('Deve testar o uso do matcher not', () => {
    expect('Fulano').not.toEqual('Beltrano');
  })

  it('Deve testar o uso do matcher toContain', () => {
    expect('Marvel').toContain('Marvel');
    expect([1, 2, 3]).toContain(1);
  })

  it('Deve testar o uso do matcher toBeDefined', () => {
    let name;
    name = 'Fulano';

    expect(name).toBeDefined();
  })

  it('Deve testar o uso do matcher toBeUndefined', () => {
    let name;

    expect(name).toBeUndefined();
  })

  it('Deve testar o uso do matcher toBeNull', () => {
    expect(null).toBeNull();
  })

  it('Deve testar o uso do matcher toBeNaN', () => {
    expect(NaN).toBeNaN();
  })

  it('Deve testar o uso do matcher toBeGreatherThan', () => {
    expect(10).toBeGreaterThan(1);
  })

  it('Deve testar o uso do matcher toBeLessThan', () => {
    expect(10).toBeLessThan(20);
  })

  it('Deve testar o uso do matcher toBeCloseTo', () => {
    expect(35.20).toBeCloseTo(35.2, 1);
  })

  it('Deve testar o uso do matcher toMatch', () => {
    expect('Marvel').toMatch(/Marvel/);
  })

  it('Deve testar o uso do matcher toThrow', () => {
    expect(function () {
      throw new Error('Meu erro');
    }).toThrow()
  })

});
