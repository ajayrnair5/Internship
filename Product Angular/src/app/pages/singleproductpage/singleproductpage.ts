import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api';

@Component({
  selector: 'app-singleproductpage',
  imports: [],
  templateUrl: './singleproductpage.html',
  styleUrl: './singleproductpage.css'
})
export class Singleproductpage {
 constructor(private api: Api, private route:ActivatedRoute) {}

  product: any;
  ngOnInit() {
   let id = this.route.snapshot.params['id'];
   this.api.getProductById(id).then((product: any) => this.product = product);
    }
}
