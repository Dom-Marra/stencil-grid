import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-grid',
  styleUrl: 'app-grid.css'
})
export class AppGrid {

  @Prop() data: Array<any>;

  render() {
    return (
      <ion-list class="movie-list ion-no-padding">
        {
          this.data?.map(data => 
            (
              <ion-item lines="none" class="ion-margin ion-no-padding" color="dark">
                <img class="ion-padding-end" src={'https://image.tmdb.org/t/p/w342' + data.poster_path} />
                <ion-label>
                  <ion-grid>
                    <ion-row class="ion-align-items-center">
                      <ion-col size="auto">
                        <p>{(data.vote_average * 10).toFixed(0)}%</p>
                      </ion-col>
                      <ion-col>
                        <h2>{data.original_title}</h2>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col class="ion-text-wrap">
                        <p>{ data.overview }</p>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-label>
              </ion-item>
            )
          )
        }
      </ion-list>
    );
  }

}
