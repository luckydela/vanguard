import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AgentmanagerComponent } from './agentmanager/agentmanager.component';
import { QuotesComponent } from './quotes/quotes.component';
import { StatusComponent } from './status/status.component';
import { MyaccountComponent } from './myaccount/myaccount.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'fullayout', 
  component:AgentmanagerComponent,
  //canActivateChild: [AuthGuard],
  children:[
    {path:'quotes',component: QuotesComponent },
    {path:'agentstatus', component: StatusComponent},
    
    {path:'profile', component: MyaccountComponent}


  ]
},
{path:'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent=[LoginComponent, SignupComponent, AgentmanagerComponent, QuotesComponent, StatusComponent, MyaccountComponent]