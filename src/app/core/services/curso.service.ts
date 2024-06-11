import {Injectable} from '@angular/core';
import {environment} from "../../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Curso} from "../models/curso.model";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  listarCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl+'/curso')
  }
}
