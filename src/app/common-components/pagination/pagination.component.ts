import { Component, OnInit,Input,Output,EventEmitter,ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SearchService } from "../../services/search/search.service";
import { PagerService } from "./pageservice";
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit,OnDestroy {

  @Input()
    totalRecords:number;
  
  @Input()
    recordsPerPage:number;
  
  @Input()
    currentPage:number;

  @Input()
    paginationType:string;

  @Output()
     pageDetails = new EventEmitter<any>();

  @Output()
    pageClick = new EventEmitter<any>();

  pages:Array<any> = [];
  
  constructor(private pageservice:PagerService,private searchservice:SearchService,private cdr:ChangeDetectorRef) { 
    try{
      this.currentPage = 0;
    }catch(error){
      console.error(error);
    }
  }

  ngOnInit() {
    try{
    }catch(error){
      console.error(error);
    }
  }

  counter = Array;
  pager:any;
  ngOnChanges(){
    try{
      //if(this.currentPage){
        this.pager = this.pageservice.getPager(this.totalRecords,0,8);
        this.pages = this.pager.pages;
        this.currentPage = this.pager.currentPage;
        if(this.pageClick)
          this.pageClick.emit(this.pager);
        
        //this.searchservice.setPageClick(this.pager);
        console.log(this.pager);
      //}
    }catch(error){
      console.error(error);
    }
  }

  getPages():number{
    try{
      return Math.ceil(this.totalRecords/this.recordsPerPage);
    }catch(error){
      console.error(error);
      return null;
    }
  }

  setPage(iPage:number){
    try{
      this.pager = this.pageservice.getPager(this.totalRecords, iPage,8);
      this.pages = this.pager.pages;
      this.currentPage = this.pager.currentPage;
      if(this.pageClick)
        this.pageClick.emit(this.pager);

      //this.searchservice.setPageClick(this.pager);
      console.log(this.pager);
      // get current page of items
      //this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
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

  ngAfterContentChecked(){
    try{
      this.cdr.detectChanges();
    }catch(error){
      console.error(error);
    }
  }

}
