/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2024-06-12 19:25:47.

export interface CategoriaDto {
    idCategoria: number;
    nombre: string;
}

export interface CursoConEjecucionDto {
    idCurso: number;
    nombre: string;
    cargaHoraria: number;
    aficheImg: string;
    fichaTecnicaPdf: string;
    modalidad: Modalidad;
    categoria: CategoriaDto;
    estado: string;
    cursoEjecucion: CursoEjecucionDto;
}

export interface CursoEjecucionDto {
    idCursoEjecucion: number;
    fechaInicio: Date;
    fechaFin: Date;
    fechaLimite: Date;
    certificadoImg: string;
    enEjecucion: boolean;
    estado: string;
}

export interface CursoSinEjecucionDto {
    idCurso: number;
    nombre: string;
    cargaHoraria: number;
    aficheImg: string;
    fichaTecnicaPdf: string;
    modalidad: Modalidad;
    categoria: CategoriaDto;
    estado: string;
}

export interface Serializable {
}

export interface UsuarioDto extends Serializable {
    idUsuario: number;
    nombreUsuario: string;
    contrasena: string;
    habil: boolean;
}

export interface UsuarioIniciarSesionDto extends Serializable {
    nombreUsuario: string;
    contrasena: string;
}

export type Modalidad = 'PRESENCIAL' | 'VIRTUAL';
