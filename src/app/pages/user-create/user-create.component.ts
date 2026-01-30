import { Component, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-user-create',
    standalone: true,
    imports: [],
    templateUrl: './user-create.component.html',
    styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
    private fb = inject(FormBuilder)

    formNewUser = this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        seniority: ['', Validators.required],
        years: ['', Validators.required],
        availability: ['', Validators.required],
        description: ['', Validators.required],
    })
}