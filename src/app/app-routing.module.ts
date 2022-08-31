import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CetComponent } from './cet/cet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordsComponent } from './records/records.component';
import { SgaComponent } from './sga/sga.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sga', component: SgaComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'cet', component: CetComponent },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'ui-elements', loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: '**', redirectTo: 'general-pages/page-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
