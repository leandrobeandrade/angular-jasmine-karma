import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';

import { of } from "rxjs";

import { SpyonService } from './spyon.service';

describe('SpyonService', () => {
  let service: SpyonService;
  const logger = jasmine.createSpy("log");
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de usuários', () => {
    const response = [
      {name: 'Fulano', age: 25, email: 'fulano@gmail.com'},
      {name: 'Ciclano', age: 42, email: 'ciclano@gmail.com'},
      {name: 'Beltrano', age: 30, email: 'beltrano@gmail.com'},
    ]

    spyOn(service, 'getUsers').and.returnValue(of(response));

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response)
    })
  })

  it('Deve criar método com jasmine.createSpy', () => {
    logger('Loguei no sistema');

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema');
  })

  it('Deve criar métodos com jasmine.createSpyObj', () => {
    status.name('Fulano');
    status.email('fulano@gmail.com');
    status.age(25);

    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith('Fulano');
    expect(status.email).toHaveBeenCalledWith('fulano@gmail.com');
    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledWith(25);
  })
});
