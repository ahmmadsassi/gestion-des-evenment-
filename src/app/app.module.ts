import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { PostEvenmentComponent } from './post-evenment/post-evenment.component';
import { CrudEvenmentComponent } from './crud-evenment/crud-evenment.component';
import { EditevenmentComponent } from './editevenment/editevenment.component';
import { EvenmentdetailsComponent } from './evenmentdetails/evenmentdetails.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NotFoundComponentComponent,
    EventsComponent,
    SignupComponent,
    SelectComponent,
    PostEvenmentComponent,
    CrudEvenmentComponent,
    EditevenmentComponent,
    EvenmentdetailsComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
