import { HostDirective } from "../shipping/host.directive";
import { ShippingStepsService } from "../shipping/shipsteps/shipping-steps.service";
import { Component, OnInit, Inject,ComponentFactoryResolver,ViewChild } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { UserService } from '../services/user/user.service';
import { step,IStep } from "../shipping/step";
declare var jQuery:any;
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  @ViewChild(HostDirective) host:HostDirective;

  activeStep:any;
  isLinear:boolean = true;
  steps:Array<step> = [];
  constructor(private _cartService:CartService,private _userService:UserService,private shipService:ShippingStepsService,private componentFactoryResolver:ComponentFactoryResolver) { 
    try{
      this.getAllSteps();
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used for getting all steps used
   */
  getAllSteps(){
    try{
      this.steps = this.shipService.getStep();
      console.log(this.steps);
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used for loading step dynamically
   */
  loadStep(currentStep:any){
    try{
      let adItem = this.steps[currentStep.step];
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      let viewContainerRef = this.host.containerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);

      componentRef.instance.changeStep.subscribe((inc)=>{
        this.changeStep(inc);
        
        if(inc >= 0)
          jQuery( ".stepBlock" ).toggle( "slide",{ direction: "left" });
        else
          jQuery( ".stepBlock" ).toggle( "slide",{ direction: "right" });
      });
      (<IStep>componentRef.instance).data = adItem.data;
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used on/for step change
   * @param inc
   */
  changeStep(inc:any){
    try{
      if(this.steps[(this.activeStep.step + inc)]){
        this.steps[(this.activeStep.step + inc)].visited = true;
        this.activeStep = this.steps[(this.activeStep.step + inc)];
        this.loadStep(this.activeStep);
      }
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used for direct navigation to clicked step
   * @param step 
   */
  stepClick(step:any){
    try{
      if(step)
        this.activeStep = step;
        this.loadStep(this.activeStep);
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used on initialization of component
   */
  ngOnInit() {
    try{
      if(this.steps && this.steps instanceof Array && this.steps.length > 0){
        this.steps[0].visited = true;
        this.activeStep = this.steps[0];
      }
      this.loadStep(this.activeStep);
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used after initiazation of view
   */
  ngAfterViewInit(){
    try{
      //jQuery("body").css("background-color","#dfdfdf");
    }catch(error){
      console.error(error);
    }
  }
  
}
