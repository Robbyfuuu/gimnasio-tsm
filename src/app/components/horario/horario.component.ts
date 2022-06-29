import { Component, OnInit, Input } from '@angular/core';
import { Horario } from '../../Interfaces/interfaces';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {

  
  @Input()  horario:Horario={};
  
  constructor() { }

  ngOnInit() {}

}
