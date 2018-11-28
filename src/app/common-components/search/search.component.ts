import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { SearchService } from "../../services/search/search.service";

export interface search{
  items:Array<any>;
  keys:Array<string>;
}


@Pipe({
  name:"filter"
})

export class filterPipe implements PipeTransform{
  public transform(items:Array<any>,search:string,keys:Array<string>){
    try{
      if(items && items instanceof Array && items.length > 0 && search && keys instanceof Array && keys.length > 0 ){
        return items.filter((x) =>{
          let present:boolean = false;
          keys.forEach((y)=>{
            if(x[y].includes(search))
              present = true;
          });
          if(present)
            return x;
        });
      }
    }catch(error){
      console.error(error);
      return items ? items : [];
    }
  }
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[filterPipe]
})
export class SearchComponent implements OnInit {

  @Input()
    items:Array<any>;

  @Output()
    getSearch:EventEmitter<any> = new EventEmitter<any>();

  @Input()
    keys:Array<string>;

  public search:string;
  public itemsCopy:Array<any> = [];

  constructor(private filter:filterPipe,private searchservice:SearchService) { 

  }

  ngOnChanges(){
    try{
      if(this.items && this.itemsCopy.length == 0){
        this.itemsCopy = this.itemsCopy.concat(this.items);
      }
    }catch(error){

    }
  }

  ngOnInit() {
    try{
      this.searchservice.search.subscribe((result:search)=>{
        this.items = result.items;
        this.itemsCopy = this.itemsCopy.concat(this.items);
        this.keys = result.keys;
      });
    }catch(error){
      console.error(error);
    }
  }

  searchItem(){
    try{
      //if(this.getSearch){
        if(this.search){
          this.searchservice.completeSearch(this.filter.transform(this.itemsCopy,this.search,this.keys));
          //this.getSearch.emit(this.filter.transform(this.itemsCopy,this.search,this.keys));
        }
        else{
          this.searchservice.completeSearch(this.itemsCopy)
          //this.getSearch.emit(this.itemsCopy);
        }
      //}
    }catch(error){
      console.error(error);
    }
  }

}
