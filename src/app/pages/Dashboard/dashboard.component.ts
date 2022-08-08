import { Component, OnInit } from '@angular/core';

import { Filter } from '@app/models/Filter.model'
import { EstadoService } from '@app/services/estado.service';
import { HistoricoDisponibilidadeService } from '@app/services/historicoDisponibilidade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  calendar_pt_br = {
    firstDayOfWeek: 0,
    dateFormat: 'yyyy-MM-dd hh:mm:ss',
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  };

  data: any = null;

  estadoMaisIndisponivelList: any[] = [];

  historicoDisponibilidadeList: any[] = [];

  loadingHistoricoDisponibilidade: boolean = false;

  constructor(private estadoService: EstadoService, private historicoDisponibilidadeService: HistoricoDisponibilidadeService) { }

  ngOnInit() {
    this.getEstadoMaisIndisponivel();
    this.getHistoricoDisponibilidade();
  }

  getEstadoMaisIndisponivel() {
    this.estadoService.getEstadoMaisIndisponivel().subscribe(
      (response: any) => this.estadoMaisIndisponivelList = response.body,
      error => console.error(error)
    )
  }

  getTorio() {
    const filter = { data: this.data } as Filter;
    this.getHistoricoDisponibilidade(filter)
  }

  getHistoricoDisponibilidade(filter?: Filter) {
    if (!this.loadingHistoricoDisponibilidade) {
      this.loadingHistoricoDisponibilidade = true;

      this.historicoDisponibilidadeService.getHistoricoDisponibilidade(filter).subscribe(
        (response: any) => this.historicoDisponibilidadeList = response.body,
        error => console.error(error),
        () => this.loadingHistoricoDisponibilidade = false

      )
    }
  }

}
