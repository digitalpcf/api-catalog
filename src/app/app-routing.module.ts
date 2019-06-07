import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclientComponent } from './components/addclient/addclient.component';
import { ViewclientComponent } from './components/viewclient/viewclient.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAppListComponent } from './components/view-app-list/view-app-list.component';
import { AddnewapiComponent } from './components/addnewapi/addnewapi.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'addClient', component:AddclientComponent},
  {path:'viewclient', component: ViewclientComponent},
  {path: 'viewapplist', component:ViewAppListComponent},
  {path: 'addnewapi', component:AddnewapiComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
