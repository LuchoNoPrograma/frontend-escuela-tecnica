export interface Curso {
  idCurso: number;
  nombreCurso: string;
  fechaInicio: Date;
  fechaFin: Date;
  modalidad: {
    nombre: string
  },
  nivel: {
    nombre: string
  },
  estado: string
}
