import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {
  
  private alunos: String[]=[];

  constructor(){
    this.alunos =['Victor',
    'Pedro','Miguel','Vinicius','João'];
    }

    getAlunos(){
      return this.alunos;
    }
}
