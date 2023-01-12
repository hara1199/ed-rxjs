import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-inaction',
  template: ''
})
export class InactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable = interval(1000).pipe(
      take(5),
      map((num:any) => 2 * num),
      filter((value:any) => value > 5)
    );

    observable.subscribe({
      next: data => console.log(data)
    })
  }

}
