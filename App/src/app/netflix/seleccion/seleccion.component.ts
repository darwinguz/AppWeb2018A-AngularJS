import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {
  @Input() contador = 0;

  //configuracion de servicios u otras configuraciones
  constructor() {
    console.log('constructor')
  }

  //empieza la logica
  ngOnInit() {
    console.log('On init')
    console.log(this.contador)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes ', changes)
  }

  ngOnDestroy(): void {
    console.log('On destroy')
  }

  aumentarContador(): number {
    return ++this.contador
  }

}
