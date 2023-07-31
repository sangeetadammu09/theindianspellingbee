import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  public visible = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService,
     private toastrService: ToastrService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9,]*$'), Validators.maxLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9,]*$'), Validators.maxLength(10)]],
      standard: ['', Validators.required],
      school: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  onRegisterSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      var studentObj: any = {};
      studentObj.name = this.registerForm.controls['name'].value;
      studentObj.age = this.registerForm.controls['age'].value;
      studentObj.email = this.registerForm.controls['email'].value;
      studentObj.contact = this.registerForm.controls['phone'].value;
      studentObj.standard = this.registerForm.controls['standard'].value;
      studentObj.school = this.registerForm.controls['school'].value;
       console.log(studentObj,'------------')
      this.contactService.register(studentObj).subscribe((data: any) => {
        console.log(data)
         if (data.status == 200) {
           this.router.navigate(['/'])
          this.toastrService.success('Thankyou for registering your details!. Our Team will get back to you soon!');
         }

      }, (error: any) => {
        console.log(error)
        this.toastrService.error('Something went wrong')
      })

    } else {
      return;
    }

  }

}
