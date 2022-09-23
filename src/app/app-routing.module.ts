import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CetComponent } from './cet/cet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordsComponent } from './records/records.component';
import { SgaComponent } from './sga/sga.component';
import {LoginComponent} from './login/login.component'
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  { path: 'dashboard', canActivate:[AuthGuard],  component: DashboardComponent },
  { path: 'sga', canActivate:[AuthGuard], component: SgaComponent },
  { path: 'records', canActivate:[AuthGuard], component: RecordsComponent },
  { path: 'cet', canActivate:[AuthGuard], component: CetComponent },
  { path: 'general-pages', canActivate:[AuthGuard], loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'ui-elements', canActivate:[AuthGuard], loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule) },
  { path: 'form',  canActivate:[AuthGuard], loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'charts',  canActivate:[AuthGuard], loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'tables', canActivate:[AuthGuard], loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: '**', redirectTo: 'general-pages/page-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
