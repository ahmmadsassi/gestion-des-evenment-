import { SignupComponent } from './signup/signup.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [

{path:'signin',component:SignInComponent},
{path:'events',component:EventsComponent},
{path:'signup',component:SignupComponent},


{path: '404', component: NotFoundComponentComponent},
{path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
