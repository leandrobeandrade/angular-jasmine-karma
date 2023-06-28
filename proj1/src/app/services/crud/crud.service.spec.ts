import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;
  let htppTestingController: HttpTestingController;
  let url: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CrudService);
    htppTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar login', () => {
    const response = [
      {
        "id": 1,
        "name": "Fulano",
        "email": "fulano@gmail.com",
        "age": 28
      }
    ];
    const user = {
      "name": "Fulano",
      "email": "fulano@gmail.com",
      "age": 28
    };
    service.login(user).subscribe();

    const req = htppTestingController.expectOne(`${url}/login`);

    service.login(user).subscribe(res => {
      expect(res).toBe(response);
    });

    expect(req.request.method).toBe('POST');
    expect(req.request.url).toBe(`${url}/login`);
    req.flush(response);
  })

  it('Deve realizar requisição por id [GET]', () => {
    const id = 3;
    const response = {name: 'Fulano', email: 'fulano@gmail.com', age: 28};

    service.getUsersById(id).subscribe(res => {
      expect(res).toBe(response);
    })

    const req = htppTestingController.expectOne(`${url}/users/${id}`);

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${url}/users/${id}`);

    req.flush(response);
  })

  it('Deve realizar chamada GET para obter usuários', () => {
    const response = [
      {
        "id": 1,
        "name": "Fulano",
        "email": "fulano@gmail.com",
        "age": 29
      },
      {
        "id": 2,
        "name": "Beltrano",
        "email": "beltrano@gmail.com",
        "age": 20
      },
      {
        "id": 3,
        "name": "Ciclano",
        "email": "ciclano@gmail.com",
        "age": 35
      }
    ];
    service.getUsers().subscribe();

    const req = htppTestingController.expectOne(`${url}/users`);

    service.getUsers().subscribe(res => {
      expect(res).toBe(response);
    })

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${url}/users`);
    req.flush(response);
  })

  it('Deve realizar chamada GET com headers para obter usuários', () => {
    const response = [
      {
        "id": 1,
        "name": "Fulano",
        "email": "fulano@gmail.com",
        "age": 29
      },
      {
        "id": 2,
        "name": "Beltrano",
        "email": "beltrano@gmail.com",
        "age": 20
      },
      {
        "id": 3,
        "name": "Ciclano",
        "email": "ciclano@gmail.com",
        "age": 35
      }
    ];
    service.getUsersWithPromise().then(() => {});

    const req = htppTestingController.expectOne(`${url}/users`);

    service.getUsersWithPromise().then(res => {
      expect(res).toBe(response);
    });

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${url}/users`);
    req.flush(response);
  })

  it('Deve retornar se usuário está autenticado', () => {
    const response = true;

    service.isAuthenticated().then(() => {});
    service.isAuthenticated().then(res => {
      expect(res).toBe(response);
    });
  })

  it('Deve gerar erro ao obter usuários', () => {
    service.getUsers().subscribe({
      error: (erro) => {
        expect(erro.status).toBe(500);
      }
    });

    const req = htppTestingController.expectOne(`${url}/users`);

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${url}/users`);

    req.flush(500, {
      status: 500,
      statusText: 'Erro de Rede'
    });
  })

  it('Deve fazer requisição para cadastrar usuário [POST]', () => {
    const user = {"id":0.18013741332928745,"name":"Belciclano","email":"belciclano@gmail.com","age":"40"};
    const response = {
      "id": 0.18013741332928745,
      "name": "Belciclano",
      "email": "belciclano@gmail.com",
      "age": "40"
    }
    service.postUser(user).subscribe(res => {
      expect(res).toBe(response);
    });

    const req = htppTestingController.expectOne(`${url}/users`);

    expect(req.request.method).toBe('POST');
    req.flush(response);
  })

  it('Deve atualizar usuário [PUT]', () => {
    const id = 1;
    const user = {"name":"FooBar","email":"foobar@gmail.com","age":"22"};
    const response = {"name":"FooBar","email":"foobar@gmail.com","age":"22"};

    service.putUser(id, user).subscribe(res => {
      expect(res).toBe(response);
    });

    const req = htppTestingController.expectOne(`${url}/users/${id}`);

    expect(req.request.method).toBe('PUT');
    expect(req.request.url).toBe(`${url}/users/${id}`);

    req.flush(response);
  })

  it('Deve excluir usuário [DELETE]', () => {
    const id = 2;
    const response = {};

    service.deleteUser(id).subscribe(res => {
      expect(res).toBe(response);
    });

    const req = htppTestingController.expectOne(`${url}/users/${id}`);

    expect(req.request.method).toBe('DELETE');
    expect(req.request.url).toBe(`${url}/users/${id}`);

    req.flush(response);
  })

  it('Deve conter headers na requisição', () => {
    service.getUserWithHeaders().subscribe();

    const req = htppTestingController.expectOne(`${url}/users`);

    expect(req.request.headers.has('content-type')).toEqual(true);
    expect(req.request.headers.has('Authorization')).toEqual(true);
  })

});
