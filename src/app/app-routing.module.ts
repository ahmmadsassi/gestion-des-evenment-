import { EditevenmentComponent } from './editevenment/editevenment.component';
import { CrudEvenmentComponent } from './crud-evenment/crud-evenment.component';
import { SignupComponent } from './signup/signup.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SelectComponent } from './select/select.component';
import { PostEvenmentComponent } from './post-evenment/post-evenment.component';
import { EvenmentdetailsComponent } from './evenmentdetails/evenmentdetails.component';

const routes: Routes = [

{path:'signin',component:SignInComponent},
{path:'',component:EventsComponent},
{path:'signup',component:SignupComponent},
{path:'select',component:SelectComponent},
{path:'post',component:PostEvenmentComponent},
{path:'ajout',component:CrudEvenmentComponent},
{path:'edit',component:EditevenmentComponent},
{path:'detailsevenment',component:EvenmentdetailsComponent},
{path: '404', component: NotFoundComponentComponent},
{path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
