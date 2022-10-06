import { Aviso } from './../models/IAvisos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  private API_SERVER = 'http://localhost:8080/avisos/';

  constructor(private httpClient: HttpClient) { }

  public getAvisos(): Observable<Aviso[]> {
    return this.httpClient.get<Aviso[]>(this.API_SERVER);
  }

  public saveAvisos(aviso: Aviso[]): Observable<any> {
    return this.httpClient.post<any>(this.API_SERVER, aviso)
  }

  public deleteAvisoById(idAviso: number): Observable<any>{
    return this.httpClient.delete<any>(this.API_SERVER + 'delete/' + idAviso)
  }

}

