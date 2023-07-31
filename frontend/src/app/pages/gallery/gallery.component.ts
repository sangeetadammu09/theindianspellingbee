import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gallery = [
    {
      imgUrl:'assets/img/gallery/1.png',
    },
    {
      imgUrl:'assets/img/gallery/2.png',
    },
    {
      imgUrl:'assets/img/gallery/3.png',
    },
    {
      imgUrl:'assets/img/gallery/4.png',
    },
    {
      imgUrl:'assets/img/gallery/5.png',
    },
    {
      imgUrl:'assets/img/gallery/6.png',
    },
    {
      imgUrl:'assets/img/gallery/7.png',
    },
    {
      imgUrl:'assets/img/gallery/8.png',
    },
    {
      imgUrl:'assets/img/gallery/9.png',
    },
    {
      imgUrl:'assets/img/gallery/10.png',
    },
    {
      imgUrl:'assets/img/gallery/11.png',
    },
    {
      imgUrl:'assets/img/gallery/12.png',
    },
    
  ]

}
