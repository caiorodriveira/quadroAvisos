import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
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
    private location: Location,
  ) {

    this.formAvisos = this.fb.group({
      id: [''],
      titulo: [null, Validators.required],
      descricao: [null, Validators.required],
      data: new Date(),
    });

  }

  ngOnInit(): void {
    if(this.formAvisos.value.descricao == ''){
      this.formAvisos.value.descricao == null;
    }
    console.log(this.formAvisos.value.descricao)
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

  onBack()
  {
    this.location.back()
  }

  onSuccess()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
    this.onBack();
  }

  private onError()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
  }


}
