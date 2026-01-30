import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { UserData } from "../../../assets/users.mock";

@Component({
    selector: 'app-user-create',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './user-create.component.html',
    styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
    private fb = inject(FormBuilder)
    private usersService = inject(UsersService)
    private router = inject(Router)

    formNewUser = this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', Validators.required],
        seniority: ['', Validators.required],
        years: ['', Validators.required],
        availability: ['', Validators.required],
        descripcion: ['', Validators.required],
    })

    saveUser() {
        const newUserData = this.formNewUser.getRawValue() as unknown as UserData;
        this.usersService.createUser(newUserData);
        this.router.navigate(['/user-info']);
    }
}