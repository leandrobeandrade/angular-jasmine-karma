import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { of } from "rxjs";

import { HttpService } from './http.service';

class MockService extends HttpService {
  response = [
    {
      "name": "Danilo 2",

      "email": "danilo@gmail.com",
      "age": "30",
      "id": 1
    },
    {
      "id": 3,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 4,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 0.8230837961873159,
      "name": "Danilo ",
      "email": "danilo@gmail.com",
      "age": "30"
    }
  ];
  /*override getUsers() {
    return of(this.response)
  }*/

}

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpService,
          useClass: MockService
        }
      ]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada HTTP', () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",
        "id": 1
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ];

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response)
    })
  })

});
