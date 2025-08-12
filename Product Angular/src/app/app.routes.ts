import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product} from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Component } from '@angular/core';
import { Singleproductpage } from './pages/singleproductpage/singleproductpage';

export const routes: Routes = [

    {
    path: '',
    component: Home
  },
   {
    path: 'product',
    component: Product
  },
   {
    path: 'contact',
    component: Contact
  },
{ path:'singleproduct/:id', component:Singleproductpage}
];
