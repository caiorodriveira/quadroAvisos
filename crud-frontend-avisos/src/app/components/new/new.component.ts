import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  formAvisos: FormGroup;

  constructor(
    private fb: FormBuilder,
    private avisosService: AvisosService,
  ) {

    this.formAvisos = this.fb.group({
      id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      data: new Date(),
    });
  }

  ngOnInit(): void {
    console.log(this.formAvisos)
   }

  onSubmit(): void{

    this.avisosService.saveAvisos(this.formAvisos.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
