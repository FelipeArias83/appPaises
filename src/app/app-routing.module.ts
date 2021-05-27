
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';



//exportamos Routes para el path
const routes: Routes = [
        //aca declaro las URL que se vana  mostrar
       {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
       
       },
       {
           path:'region',
           component: PorRegionComponent,    
       },       
        {
           path:'capital',
           component: PorCapitalComponent,
        },
        {
            //aca es dinamico con los /:id
            path: 'pais/:id',
            component: VerPaisComponent,
        },
        {
            //cualquier URL que no este aca lo redirecciona o 404
            path:'**',
            redirectTo:''

        }

];




@NgModule({
    imports:[
        //forRoot para que lo haga dentro del root llamanto los routes
        RouterModule.forRoot( routes )

    ],
    exports:[
        // se incorpora en export
       RouterModule
    ]
})

export class appRoutingModule {}
