import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';



@Component({
  selector: 'app-machine',
  templateUrl: './machine.page.html',
  styleUrls: ['./machine.page.scss'],
  animations: [
    trigger('rotating', [
      state('begin', style({
      })),
      state('end', style({
        transform: "translateY(100vw)"
      })),
      transition('begin => end', [
        animate('1s', keyframes([
          style({ transform: 'translateY(100vw)' }),
        ]))
      ]),
    ])
  ]
})

export class MachinePage implements OnInit {
  start = true

  personen = [
    {name: 'sjors', image: 'assets/personen/Leo.PNG'},
    {name: 'leonard', image: 'assets/personen/Sjors.PNG'},
    {name: 'martijn', image: 'assets/personen/Martijn.PNG'},
  ]
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('test')
  }

}
