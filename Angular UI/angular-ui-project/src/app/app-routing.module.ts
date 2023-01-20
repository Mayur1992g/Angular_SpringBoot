import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetaisComponent } from './employee-detais/employee-detais.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'crete-employee',component: CreateEmployeeComponent},
  {path: '',redirectTo: 'employees' , pathMatch: 'full'},
  {path: 'update-employee/:id',component: UpdateEmployeeComponent},
  {path: 'employee-details/:id',component: EmployeeDetaisComponent}

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
