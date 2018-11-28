import { Component, OnInit , Pipe, PipeTransform,ChangeDetectorRef,OnDestroy } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { SearchService } from "../services/search/search.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Pipe({
  name:"CSlice"
})

export class CSliceFilter implements PipeTransform{
    public transform(iArr:Array<any>,start:number,end:number){
      try{
        if(iArr && iArr.length > 0){
          let tempArray:Array<any> = [];
          for(let i=start;i<=end;i++){
            tempArray.push(iArr[i]);
          }
          return tempArray;
        }
      }catch(error){
        console.error(error);
      }
    }
}

@Component({
  selector: 'app-mech',
  templateUrl: './mech.component.html',
  styleUrls: ['./mech.component.css'],
  providers:[CSliceFilter]
})
export class MechComponent implements OnInit,OnDestroy {
  products:Array<any> = [];
  filePath:string;
  recordsPerPage:number = 3;
  currentPage:number = 1;
  start:number;
  end:number;
  keys:Array<string> = ["productName"];
  constructor(private product:ProductsService,private route:Router,private cdr: ChangeDetectorRef,private searchservice:SearchService) { 
    this.filePath = "./assets/products/Mech/images/";
  }


  ngOnInit() {
    try{
      this.getProducts();
      this.searchservice.searchAck.subscribe((iArr:Array<any>)=>{
        this.products = iArr;
      });
    }catch(error){
      console.error(error);
    }
  }

  ngAfterViewChecked(){
    // this.searchservice.page.subscribe((IPage)=>{
    //   this.start = IPage && IPage.startIndex >= 0 ? IPage.startIndex : 0;
    //   this.end = IPage && IPage.endIndex >= 0 ? IPage.endIndex : this.products.length;
    // });
  }

  getProducts(){
    try{
      let param:any = {
        type:"MECH"
      }
      this.product.getProducts(param).subscribe((result)=>{
        if(result){
          console.log(result);
          this.products = result;
          this.searchservice.registerSearch({items:this.products,keys:this.keys});
        }
      });
    }catch{
      console.error("Something Went wrong")
    }
  }


  getPageDetails(IPage:any){
    try{
      this.start = IPage && IPage.startIndex >= 0 ? IPage.startIndex : 0;
      this.end = IPage && IPage.endIndex >= 0 ? IPage.endIndex : this.products.length;
    }catch(error){
      console.error(error);
    }
  }

  getProductDetails(iProduct:any){
    try{
      this.product.currentProduct = Object.assign({},iProduct);
      this.route.navigateByUrl("/product-details/" + iProduct.productName).then((res)=>{
        console.log(res);
      },(error)=>{
        console.error(error);
      });
    }catch(error){
      console.error(error);
    }
  }

  updateList(iEvent:Array<any>){
    try{
      this.products = iEvent;
    }catch(error){
      console.error(error);
    }
  }

  ngOnDestroy(){
    try{
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    }catch(error){
      console.error(error);
    }
  }
}
