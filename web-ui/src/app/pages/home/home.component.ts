import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'npiNumber',
    'businessAddress',
    'phoneNumber',
    'emailAddress',
  ];
  dataSource = new MatTableDataSource<any>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .then((info: Person[]) => {
        this.dataSource = new MatTableDataSource<any>(info);
        this.dataSource.paginator = this.paginator;
      })
      .catch((err: any) => {})
      .finally(() => {});
  }
}
