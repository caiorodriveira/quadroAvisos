import { Router } from '@angular/router';
import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  formAvisos: FormGroup;
  message  = '';

  constructor(
    private fb: FormBuilder,
    private avisosService: AvisosService,
    private _snackBar: MatSnackBar,
    private route: Router,
  ) {

    this.formAvisos = this.fb.group({
      id: [''],
      titulo: [null, Validators.required],
      descricao: [null, Validators.required],
      data: new Date(),
    });

  }

  ngOnInit(): void {

  }


  onSubmit(): void {

    this.avisosService.saveAvisos(this.formAvisos.value).subscribe(
      (res) => {
        this.message = "Aviso Salvo com sucesso";
        this.onSuccess();
      },
      (error) => {
        this.message = "Erro ao criar novo aviso !";
        this.onError();
      }
    )
  }

  redirectList(){
    this.route.navigate(['']);
  }

  onSuccess()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
    this.redirectList();
  }

  private onError()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
  }


}
