import { AfterViewInit, Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserData } from '../../../assets/users.mock';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatPaginatorModule, RouterModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements AfterViewInit, OnDestroy {
  private usersService = inject(UsersService);
  private finishSubs = new Subject<void>();

  displayedColumns: string[] = ['name', 'surname', 'seniority', 'years', 'availability'];
  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /************************************
   *  Hooks
   * **********************************/

  ngAfterViewInit() {
    this.usersService.users$.pipe(
      takeUntil(this.finishSubs)
    ).subscribe(users => {
      this.dataSource.data = users;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy() {
    this.finishSubs.next();
    this.finishSubs.complete();
  }

  /************************************
   *  Methods
   * **********************************/

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');

    /* Download Excel */
    XLSX.writeFile(wb, 'Usuarios_DigitalChanel.xlsx');
  }
}
