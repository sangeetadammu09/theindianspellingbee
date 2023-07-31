import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imagesArr = [
    { image: './assets/img/carousel/1.png', text: 'Register Today', buttonText: 'Learn More'},
    { image: './assets/img/carousel/2.png', text: 'Register Today', buttonText: 'Learn More'},
    { image: './assets/img/carousel/3.png', text: 'Register Today', buttonText: 'Learn More'},
    { image: './assets/img/carousel/4.png', text: 'Register Today', buttonText: 'Learn More'},
    { image: './assets/img/carousel/5.png', text: 'Register Today', buttonText: 'Learn More'},

  ]

  ngOnInit(): void {
  }

}
