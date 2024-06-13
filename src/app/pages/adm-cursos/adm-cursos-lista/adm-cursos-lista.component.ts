import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatChipsModule} from "@angular/material/chips";
import {SharedChipComponent} from "@/app/shared/components/shared-chip/shared-chip.component";
import {CursoConEjecucionDto} from "@/app/core/model/backend.model";
import {CursoService} from "@/app/core/services/curso.service";

@Component({
  selector: 'app-adm-cursos-lista',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, SharedChipComponent
  ],
  templateUrl: './adm-cursos-lista.component.html',
  styles: `
    .mat-column-nombre {
      min-width: 27.5% !important;
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
