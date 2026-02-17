import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'todo/:id', component: TodoDetailsComponent },
  {path: '**',component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponent,TodoDetailsComponent,LoginComponent,PageNotFoundComponent]
