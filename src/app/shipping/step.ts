import { Type } from "@angular/core";

export class step {
    constructor(public component:Type<any> , public step:number, public title:string,public visited:boolean,public data?:any){
        try{

        }catch(error){
            console.error(error);
        }
    }
}

export interface IStep{
    data:any;
}