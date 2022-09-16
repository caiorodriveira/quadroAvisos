import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aviso } from './model/IAvisos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avisos: Aviso[] = [];

  constructor(private avisosService: AvisosService) {

    this.avisosService.getAvisos().subscribe(
      response => {
        this.avisos = response;
      },
      (error) => {
        console.error(error);
      }
    )

  }

  ngOnInit(): void {

  }


}
