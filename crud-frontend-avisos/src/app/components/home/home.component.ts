import { Aviso } from './../../models/IAvisos';
import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avisos: Aviso[] = [];
  avisosnotload: any;

  constructor(private avisosService: AvisosService) {

  }
  newAviso(){
    console.log("Editar Aviso")
  }

  editAviso(aviso: any){
    console.log(`Editar aviso: "${aviso.titulo}"`)
  }

  ngOnInit(): void {
    this.onGetAllAvisos();
  }

  onGetAllAvisos () :void {
    this.avisosService.getAvisos().subscribe(
      response => {
        this.avisos = response;
      },
      (error) => {
        console.error(error);
      }
    )
  }


}
