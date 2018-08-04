import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
	{
		path:'',
		component: LoginComponent
	},
	{
		path:'register',
		component: RegisterComponent
	},
	{
		path:'details',
		component: DetailsComponent
	},
	{
		path:'edit',
		component: EditComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
