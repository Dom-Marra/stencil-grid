import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() data: any = undefined;

  componentWillLoad() {
    fetch('https://api.themoviedb.org/3/movie/popular',  {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmQ3NDU2N2RhY2IwNDc2MmIyNGI5Njk2YjE4MGI4OCIsInN1YiI6IjYxMWJlNjYzMmRjNDRlMDAyYzQzYzI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cy_3dpCublqFFqIavnf6CKqewZusOQvKsGHX08UY8zY'
      }
    }).then((res: Response) => {
      res.json().then((data => {
        this.data = data.results;
      }))
    })
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title class="ion-text-center">YOOBIC Grid Exercise</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding" color="light">
        <app-grid data={this.data}></app-grid>
      </ion-content>,
    ];
  }
}
