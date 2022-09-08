import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  private API_SERVER = 'http://localhost:8080/avisos/';

  constructor(private httpClient: HttpClient) { }

  public getAvisos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveAvisos(aviso: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, aviso)
  }

}

