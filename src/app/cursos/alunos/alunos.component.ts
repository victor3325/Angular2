import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
  providers:[AlunosService]
})
export class AlunosComponent implements OnInit {

  alunos: String[] = [];

  constructor(private service: AlunosService) { }

  ngOnInit() {
    this.alunos = this.service.getAlunos();
  }

}
