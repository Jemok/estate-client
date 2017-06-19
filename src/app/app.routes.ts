import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddPropertyComponent} from "./add-property/add-property.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {EditPropertyComponent} from "./edit-property/edit-property.component";



const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'add-property', component: AddPropertyComponent},
    {path: 'property-detail/:houseId', component: PropertyDetailComponent},
    {path: 'edit-property/:houseId', component: EditPropertyComponent}

];

export const routing = RouterModule.forRoot(routes);
