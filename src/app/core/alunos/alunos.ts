import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiservice';
import { CommonModule } from '@angular/common';

@Component({ 
  selector: 'app-alunos',
   standalone: true,
    templateUrl: './alunos.html',
    imports:[CommonModule]
  })
export class AlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAlunos().subscribe((data) =>{
      console.log(data);
      this.alunos = data;
    }) 
}

}
