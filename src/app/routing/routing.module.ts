import { ModuleWithProviders, NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MechComponent } from '../mech/mech.component';
import { MailsComponent } from '../mails/mails.component';
import { ImageGallaryComponent } from '../image-gallary/image-gallary.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ITRComponent } from '../itr/itr.component';
import { MultipleMapsComponent } from '../multiple-maps/multiple-maps.component';
import { CustomAutocompleteComponent } from "../custom-autocomplete/custom-autocomplete.component";
import { CustomDropComponent } from '../custom-drop/custom-drop.component';
import { RulesStepComponent } from '../rules-step/rules-step.component';
import { CustomStepperComponent } from '../custom-stepper/custom-stepper.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ApiTesterComponent } from '../api-tester/api-tester.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DetailsGuards } from "../common/routeGuards/detailsGuard";
import { MapGComponent } from "../map-g/map-g.component";
import { MycartComponent } from "../mycart/mycart.component";
export const routes: Routes = [
    { path:'',pathMatch:'full',redirectTo:'/login'},
    { path:'login',component:LoginComponent},
    { path:'register',component:RegisterComponent},
    { path:'mech',component:MechComponent},
    { path:'mail',component:MailsComponent},
    { path:'gallary',component:ImageGallaryComponent},
    { path:'ITRDoc',component:ITRComponent},
    { path:"map",component:MapGComponent },
    {path:"maps",component:MultipleMapsComponent},
    {path:"auto",component:CustomAutocompleteComponent},
    {path:"drop",component:CustomDropComponent},
    {path:"rules",component:RulesStepComponent},
    {path:"stepper",component:CustomStepperComponent},
    {path:"calc",component:CalculatorComponent},
    {path:"postman",component:ApiTesterComponent},
    {path:"product-details/:id",component:ProductDetailsComponent,canActivate:[DetailsGuards]},
    {path:"mycart",component:MycartComponent},
    {path:"todo",loadChildren:"../todo/todo.module#TodoModule"}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }