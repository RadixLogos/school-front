import { Routes } from '@angular/router';
import { AlunosComponent } from './core/alunos/alunos';
import { Situacao } from './core/situacao/situacao';


export const routes: Routes = [
    {
        path: "alunos",
        component: AlunosComponent
    },
    {
        path:"situacao",
        component: Situacao
    },
    { path: '', redirectTo: 'alunos', pathMatch: 'full' }
];
