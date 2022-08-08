import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { Filter } from '@app/models/Filter.model'

@Injectable({
  providedIn: 'root'
})
export class HistoricoDisponibilidadeService {
  constructor(private http: HttpClient) { }

  private url = `${environment.api_url}/historicoDisponibilidade`;

  getHistoricoDisponibilidade(filter?: Filter) {
    if (filter?.data) {
      filter.data = (new DatePipe('en-US')).transform(filter.data, 'yyyy-MM-dd HH:mm:ss')
    }

    return this.http.get(this.url,
      {
        observe: 'response', responseType: 'json',
        params: { ...(filter?.data ? { data: filter.data } : null), ...(filter?.estado_id ? { estado_id: String(filter.estado_id) } : null) }
      })
  }

}