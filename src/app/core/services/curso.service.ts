import {Injectable} from '@angular/core';
import {environment} from "@/environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CursoConEjecucionDto} from "@/app/core/model/backend.model";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  listarCursosEnGeneral(): Observable<CursoConEjecucionDto []> {
    return this.http.get<CursoConEjecucionDto[]>(this.apiUrl + '/public/curso')
  }
}
