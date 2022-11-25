import { Location } from '@angular/common';
import { Aviso } from './../../models/IAvisos';
import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avisos: Aviso[] = [];
  avisosnotload: any;
  message: string = '';

  constructor(
    private avisosService: AvisosService,
    private _snackBar: MatSnackBar,
    private route: Router,
    private rotaAtual: ActivatedRoute,

    ) {}

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

  onDeleteAviso (idAviso: number) : void {
    this.avisosService.deleteAvisoById(idAviso).subscribe(
      () => {
        this.message = "Aviso Deletado";
        this.onSuccess();
      },
      (error) => {
        console.log(error);
        this.message = "Erro ao deletar aviso";
        this.onError()

      }
    )
  }

  redirectToEdit(aviso: Aviso){
    this.route.navigate(['edit'], {relativeTo: this.rotaAtual, state:{data: aviso}});
  }
  onSuccess()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
    location.reload();
  }

  private onError()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
  }



}
