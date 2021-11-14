import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    contactForm: FormGroup
    submitted: boolean
    sent: boolean

    constructor() {
        this.sent = false
    }

    ngOnInit(): void {
        this.initForm()
    }

    private initForm(): void {
        this.contactForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.email, Validators.required]),
            subject: new FormControl(null, [Validators.required]),
            message: new FormControl(null, [Validators.required])
        })
    }

    public submitForm() {
        this.submitted = true

        if (this.contactForm.invalid) {
            return
        }

        this.showConfirmationMessage()
    }

    public resetForm() {
        this.sent = false
        this.submitted = false
        this.contactForm.reset()
    }

    public showConfirmationMessage() {
        this.sent = true
    }
}
