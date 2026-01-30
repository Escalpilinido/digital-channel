import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
    selector: 'app-user-create',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './user-create.component.html',
    styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
    private fb = inject(FormBuilder)

    formNewUser = this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', Validators.required],
        seniority: ['', Validators.required],
        years: ['', Validators.required],
        availability: ['', Validators.required],
        descripcion: ['', Validators.required],
    })

    saveUser() {
        if (this.formNewUser.valid) {
            console.log(this.formNewUser.value);
        }
    }
}