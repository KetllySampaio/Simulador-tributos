import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplesNacionalComponent } from './simples-nacional/simples-nacional';
import { LucroPresumidoComponent } from './lucro-presumido/lucro-presumido';
import { LucroRealComponent } from './lucro-real/lucro-real';

const routes: Routes = [
    {
        path: 'simples-nacional',
        component: SimplesNacionalComponent
    },
    {
        path: 'lucro-presumido',
        component: LucroPresumidoComponent
    },
    {
        path: 'lucro-real',
        component: LucroRealComponent
    },
    {
        path: '',
        redirectTo: 'simples-nacional',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalculatorRoutingModule { }
