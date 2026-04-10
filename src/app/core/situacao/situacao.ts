import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/apiservice';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-situacao',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './situacao.html',
  styleUrl: './situacao.css',
})
export class Situacao  implements OnInit{
  constructor(private service: ApiService,private cdr: ChangeDetectorRef,private zone: NgZone) {}
  matriculaAluno:string = "";;
  situacao: any[] = [];
  nomeAluno: String = "";
  
  ngOnInit(): void {
    
  }
mostrarSucesso() {
  Swal.fire({
    title: 'Sucesso!',
    text: 'Operação realizada com sucesso',
    icon: 'success'
  });
}

mostrarErro() {
  Swal.fire({
    title: 'Erro!',
    text: 'Algo deu errado',
    icon: 'error'
  });
}

  buscarSituacao(){
   
    if(this.matriculaAluno !=""){
      this.service.getSituacao(this.matriculaAluno).subscribe(
        (result:any)=>{
         this.zone.run(() => {
  this.situacao = result;
  this.nomeAluno = result[0].nomeAluno;
           this.cdr.detectChanges();
});
         
          console.log(this.situacao);
        },
        (error: any) =>{
        
        }
      );
    }
    
  }
  
}
