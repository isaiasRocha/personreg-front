import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonInput } from './model/person-input';
import { PersonRegistrationService } from './person-registration.service';

@Component({
  selector: 'app-person-registration',
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.css']
})
export class PersonRegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  person! : PersonInput;

  constructor(
    private service: PersonRegistrationService,
    private toastr: ToastrService,
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  sendPerson() : void {
    this.person = Object.assign({}, this.person, this.registrationForm.value )
      this.service.save(this.person).subscribe(p => {
        this.toastr.success('Person save!', 'Success!');
        this.registrationForm.reset();
      }, error => {
        this.toastr.error('Erro to save person!', 'Error!');
      });
  }

}
