import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.page.html',
  styleUrls: ['./machine.page.scss'],
})
export class MachinePage implements OnInit {

  personen = [
    {name: 'sjors', image: ''},
    {name: 'martijn', image: ''},
    {name: 'leonard', image: ''}
  ]
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('test')
  }

}
