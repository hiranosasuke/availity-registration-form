import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'csv',
    component: CsvReaderComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [CsvReaderComponent, UsersComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule],
})
export class HomeRoutingModule {}
