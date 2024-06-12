import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CursoService} from "../../../core/services/curso.service";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatChipsModule} from "@angular/material/chips";
import {CursoConEjecucionDto} from "../../../core/models/backend.model";
import {SharedChipComponent} from "../../../shared/components/shared-chip/shared-chip.component";

@Component({
  selector: 'app-adm-cursos-lista',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, SharedChipComponent
  ],
  templateUrl: './adm-cursos-lista.component.html',
  styles: `
    .mat-column-nombre{
      min-width: 35% !important;
    }
  `
})
export class AdmCursosListaComponent implements OnInit {
  listaCurso: CursoConEjecucionDto[];
  columnasListaCurso: string[] = ['nombre', 'fechaInicio', 'fechaFin', 'estado', 'modalidad', 'idCurso'];
  dataSource: MatTableDataSource<CursoConEjecucionDto> = new MatTableDataSource<CursoConEjecucionDto>()
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cursoService: CursoService) {
  }

  ngOnInit(): void {
    this.cursoService.listarCursosEnGeneral().subscribe(listaCurso => {
      this.listaCurso = listaCurso;
      this.dataSource.data = listaCurso;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
