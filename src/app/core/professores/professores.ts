import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professores',
  imports: [CommonModule],
  templateUrl: './professores.html',
  styleUrl: './professores.css',
})
export class Professores implements OnInit {
  professores: any[] = [];
  constructor(private apiService: ApiService, private changeDetectorRef: ChangeDetectorRef){}
  ngOnInit(){
    this.apiService.getProfessores().subscribe((data) => {
      console.log(data);
      this.professores = data;
      this.changeDetectorRef.detectChanges();
    })
  }
}
