import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'support',component:SupportComponent},
    {path:'pricing',component:PricingComponent}
];
