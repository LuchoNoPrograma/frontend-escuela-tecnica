import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatChipsModule} from "@angular/material/chips";
import {SharedChipComponent} from "@/app/shared/components/shared-chip/shared-chip.component";
import {CursoConEjecucionDto} from "@/app/core/model/backend.model";
import {CursoService} from "@/app/core/services/curso.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-adm-cursos-lista',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, SharedChipComponent,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './adm-cursos-lista.component.html',
  styles: `
    .mat-column-nombre {
      min-width: 25% !important;
    }
  `
})
export class AdmCursosListaComponent implements OnInit {
  listaCurso: CursoConEjecucionDto[];
  columnasListaCurso: string[] = ['nombre', 'fechaInicio', 'fechaFin', 'estado', 'modalidad', 'idCurso'];
  dataSource: MatTableDataSource<CursoConEjecucionDto> = new MatTableDataSource<CursoConEjecucionDto>()
  filtroBusqueda: string;
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
      this.dataSource.filterPredicate = (data: CursoConEjecucionDto, filter: string) => {
        const normalizedFilter = this.normalizeString(filter);
        const normalizedData = this.normalizeString(data.nombre) + ' ' +
          this.normalizeString(data.estado) + ' ' +
          this.normalizeString(data.modalidad);
        return normalizedData.includes(normalizedFilter);
      };
    })
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.normalizeString(filterValue.trim().toLowerCase());
  }

  private normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
