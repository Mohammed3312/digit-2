import { Component, inject, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { HttpClient } from '@angular/common/http';
import {  map , forkJoin, of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { AsyncPipe, NgIf } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent ,HeroComponent , ContactComponent , TestimonialsComponent , LoaderComponent  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLoading:boolean = false;
  titleService = inject(Title)
  metaService = inject(Meta)
// in real app we should set interface ofc
  data1$: any;
  data2$: any;
  aboutData$:Observable<any> = of({
    p1:'We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.',
    p2:'We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.'
  })




  // this part should be in service
http = inject(HttpClient)
sources = [
  this.http.get('api/1'),
  this.http.get('api/2')
];
  
ngOnInit(): void {
  // fork join part should be in service
  forkJoin(
    this.sources
    )
    .pipe(
      map((data1 , data2) => {
         this.data1$ = data1 
          this.data2$ = data2
      })),catchError((error):any=>{
        // handling error
      }),
//  setting the time custom time for loader
  setTimeout(() => {
    this.isLoading = true
  }, 4000);
  // adding title and discreption to page for seo
  this.titleService.setTitle('digitalBond');
  this.metaService.addTags([
    {name:"description" , content:"description"}
  ])
}



}
