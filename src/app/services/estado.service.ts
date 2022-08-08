import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  constructor(private http: HttpClient) { }

  private url = `${environment.api_url}/estado`;

  geEstado(id: any) {
    return this.http.get(`${this.url}/${id}`, { observe: 'response', responseType: 'json' })
  }

  geAllEstado() {
    return this.http.get(`${this.url}/all`, { observe: 'response', responseType: 'json' })
  }

  getEstadoMaisIndisponivel() {
    return this.http.get(`${this.url}/maisIndisponivel`, { observe: 'response', responseType: 'json' })
  }

}