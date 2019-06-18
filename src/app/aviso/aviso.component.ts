import { Component, OnInit } from '@angular/core';
import { Aviso } from '../model/avisos';
import { AvisoService } from '../service/aviso.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  headElements: any = ['Matéria', 'Aviso', 'Data'];

  constructor(
    public avisoService: AvisoService
  ) { }

  ngOnInit() {
    this.avisoService.getAllAvisosOrderByData();
  }


}
