import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nro1: number = 7;
  nro2: number;
  result: number;
  operacion: OperacionEnum;

  opcionesOperacion = [
    {value: OperacionEnum.Sumar, label:'Sumar' },
    {value: OperacionEnum.Restar, label:'Restar' },
    {value: OperacionEnum.Multiplicar, label:'Multiplicar' },
  ];

  resolverOperacion() {
    switch (this.operacion) {
      case OperacionEnum.Sumar:
        this.result = this.nro1 + this.nro2;
        break;
      case OperacionEnum.Restar:
        this.result = this.nro1 - this.nro2;
        break;
      case OperacionEnum.Multiplicar:
        this.result = this.nro1 * this.nro2;
        break;
    }
  }

}

enum OperacionEnum {
  Sumar = "0",
  Restar = "1",
  Multiplicar = "2"
}