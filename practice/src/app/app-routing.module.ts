import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent ,canActivate: [AuthGuard]},
  { path: 'todo/:id', component: TodoDetailsComponent, canActivate: [AuthGuard]},
  {path: '**',component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponent,TodoDetailsComponent,LoginComponent,PageNotFoundComponent]
