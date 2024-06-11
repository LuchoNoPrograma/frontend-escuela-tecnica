import {AfterViewInit, Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {CursoService} from "../../../core/services/curso.service";
import {Observable} from "rxjs";
import {Curso} from "../../../core/models/curso.model";
import {HttpClient} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-adm-cursos-lista',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  templateUrl: './adm-cursos-lista.component.html',
  styles: `
    table {
      width: 100%;
    }`
})
export class AdmCursosListaComponent implements OnInit {
  listaCurso: Curso[];
  columnasListaCurso: string[] = ['nombreCurso', 'idCurso'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource()
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
