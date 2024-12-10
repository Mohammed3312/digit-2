import { Component } from '@angular/core';
import { ReactiveFormsModule , FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contactForm!:FormGroup;
constructor( private formBuilder:FormBuilder){
  this.contactForm = this.formBuilder.group({
    name:['', Validators.required],
    email:['' , [Validators.required , Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
    message:['',Validators.required]
  })
}



onSubmit(){
  // the logic of post req should be here
}
}
