import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [AsyncPipe , NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  @Input() data$!:Observable<any>; 
}
