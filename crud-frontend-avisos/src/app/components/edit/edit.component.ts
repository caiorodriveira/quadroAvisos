import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvisosService } from './../../services/avisos.service';
import { Aviso } from './../../models/IAvisos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formAvisos: FormGroup;
  avisoPassed: Aviso;
  message: string = '';
  constructor
  (
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

    this.avisoPassed = history.state.data;

    this.formAvisos.patchValue({
      id: this.avisoPassed.id,
      titulo: this.avisoPassed.titulo,
      descricao: this.avisoPassed.descricao,
    })
  }

  ngOnInit(): void {}

  onSubmit(){
    this.avisosService.saveAvisos(this.formAvisos.value).subscribe(
      //sucess
    () => {
      this.message = 'alterado com sucesso';
      this.onSuccess()
    },
    //error
    () => {
      this.message = 'erro ao alterar aviso'
      this.onError()
    }
    )
  }

  onSuccess()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
    this.route.navigate(['']);
  }

  private onError()
  {
    this._snackBar.open(this.message, '', {duration: 3000});
  }

}
