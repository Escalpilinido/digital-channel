import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { usersData } from '../assets/users.mock';


interface UserData {
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
  imports: [MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'surname', 'seniority', 'years', 'availability', 'descripcion'];
  dataSource: UserData[] = usersData;
}
