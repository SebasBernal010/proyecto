import { Component, OnInit } from '@angular/core';
import { HerramientasService, Herramienta } from 'src/app/service/herramientas.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  herramientas:Herramienta[]=[]

  constructor( private _herramientasService:HerramientasService ) { }

  ngOnInit(): void {

    this. herramientas=this._herramientasService.getHerramientas();
    console.log(this.herramientas);
  }

}
