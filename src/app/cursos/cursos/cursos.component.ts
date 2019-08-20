import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursoService]
})
export class CursosComponent implements OnInit {

  cursos: String[] = [];

  constructor(private service: CursoService) { }

  ngOnInit() {
    this.cursos = this.service.getCursos();
  }

}
