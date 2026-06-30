import { Routes } from '@angular/router';
import { AlunosComponent } from './core/alunos/alunos';
import { Situacao } from './core/situacao/situacao';
import { Professores } from './core/professores/professores';


export const routes: Routes = [
    {
        path: "alunos",
        component: AlunosComponent
    },
    {
        path:"situacao",
        component: Situacao
    },
    {
        path: "professores",
        component: Professores
    },
    { path: '', redirectTo: 'alunos', pathMatch: 'full' }
];
