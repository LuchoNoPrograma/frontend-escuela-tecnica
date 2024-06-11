import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CursoService} from "../../../core/services/curso.service";
import {Curso} from "../../../core/models/curso.model";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-adm-cursos-lista',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule
  ],
  templateUrl: './adm-cursos-lista.component.html',
  styles: `
    .mat-column-nombreCurso{
      min-width: 40% !important;
    }
  `
})
export class AdmCursosListaComponent implements OnInit {
  listaCurso: Curso[];
  columnasListaCurso: string[] = ['nombreCurso', 'fechaInicio', 'fechaFin', 'estado', 'modalidadYNivel', 'idCurso'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>()
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cursoService: CursoService) {
  }

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe(listaCurso => {
      this.listaCurso = listaCurso;
      this.dataSource.data = listaCurso;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
