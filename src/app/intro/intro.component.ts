import { SongService } from './../services/song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: ``,
})
export class IntroComponent implements OnInit {

  // just an array
  // songs = this.service.getSongs();

  songs:any;

  Observer = {
    next: function(data:any){
      console.log(data);
    },

    error: function(error:any){
      console.log(error);
    },

    complete: function(){
        console.log("Completed....")
    }

  };

  constructor(private service:SongService) { }

  ngOnInit(): void {
    this.songs = this.service.getSongs();
    console.log(this.songs);
    // // this.songs.subscribe(this.Observer);

    this.songs.subscribe({
      next: (data:any) => console.log(data),
      error: (err:any) => console.error(err.message),
      complete: () => console.log("Completed...")
    });


    // depricated...
    // this.songs.subscribe(
    //   (data:any) => console.log(data),
    //   (err:any) => console.error(err.message),
    //   () => console.log("Completed...")
    // );

  }

}

