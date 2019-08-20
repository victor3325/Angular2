import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  private cursos: String[] = [];

  constructor() { 
    this.cursos =['Tecnico em informatica',
    'Tecnico em Redes','Superior em Analise e Desenvolvimento'];
  }

  getCursos(){
    return this.cursos;
  }
}
