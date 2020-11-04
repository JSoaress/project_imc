import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getHistorics(){
        return this.httpClient.get('http://localhost:3333/api/imc/historico');
    }

    postHistoric(historic: any){
        return this.httpClient.post('http://localhost:3333/api/imc/historico', historic);
    }

}