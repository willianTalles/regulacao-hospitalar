import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarLeitoUtiComponent } from './solicitar-leito-uti.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'solicitar-leito-uti'
    },
    children: [
      {
        path: '',
        redirectTo: 'solicitar-leito-uti'
      },
      {
        path: 'solicitar-leito-uti',
        component: SolicitarLeitoUtiComponent,
        data: {
          title: 'solicitar-leito-uti'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarLeitoUtiRoutingModule { }
