import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HerramientasComponent } from "./components/herramientas/herramientas.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

const APP_ROUTES:Routes=[
    {path: 'home', component: HomeComponent},
    {path: 'herramientas', component: HerramientasComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);