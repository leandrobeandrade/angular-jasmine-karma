import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spyon',
  templateUrl: './spyon.component.html',
  styleUrls: ['./spyon.component.css']
})
export class SpyonComponent implements OnInit {
  logged!: boolean;
  mensagem: string = 'Olá, Mundo!';

  constructor() { }

  ngOnInit(): void {
  }

  isLogged() {
    this.logged = true;
  }

  get message(): string {
    return this.mensagem;
  }

}
