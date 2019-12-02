import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []
  constructor(private service : ProductService) { }

  ngOnInit() 
  {
    // var x = this.service.getProducts()
    // x.subscribe((result)=>{
    //   this.products = result
    // })

    this.service
    .getProducts()
    .subscribe(response =>{
      if (response['status']=== 'success')
      {
        
        this.products = response ['data'] as any []
        //console.log(products)
      }

      else {
        console.log('error',response ['error'])
      }
    })
  }

}
