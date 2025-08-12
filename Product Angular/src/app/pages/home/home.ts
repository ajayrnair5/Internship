import { Component } from '@angular/core';
import { Card } from "../../common/card/card";
import { Api } from '../../api';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
items: any;
 
  constructor(private api: Api) {}
  item: any[] = [];
  ngOnInit() {
    this.api.getProducts().then(product => {
      this.items = product;
    });


  }

}


