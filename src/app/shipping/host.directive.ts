import { Directive,ViewContainerRef, Inject} from '@angular/core';
@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  public containerRef:any;
  constructor(@Inject(ViewContainerRef) containerRef) { 
    try{
      this.containerRef = containerRef;
    }catch(error){
      console.error(error)
    }
  }

}
