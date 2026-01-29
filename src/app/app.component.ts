import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { usersData } from '../assets/users.mock';
import * as XLSX from 'xlsx';

export interface UserData {
  name: string;
  surname: string;
  seniority: string;
  years: number;
  availability: boolean;
  descripcion: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'surname', 'seniority', 'years', 'availability'];
  dataSource = new MatTableDataSource<UserData>(usersData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');

    /* guardar el archivo */
    XLSX.writeFile(wb, 'Usuarios_DigitalChanel.xlsx');
  }
}
