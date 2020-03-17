import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { ListComponent } from './list/list.component';

const ROUTES: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [
    CounterComponent,
    ListComponent,
  ] /* declara todos os componentes usados no modulo */,
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ] /* importa os modulos utilizados dentro dos componentes */,
})
export class CounterModule {}
