import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: 'comp0', loadChildren: () => import('./comp0').then(m => m.Comp0Module) },
        { path: 'comp00', loadChildren: () => import('./comp00').then(m => m.Comp00Module) },
        // { path: 'date-change', loadChildren: () => import('./date-change').then(m => m.DateManagerRoute) },
        // { path: 'termination', loadChildren: () => import('./termination').then(m => m.TerminationRoute) },
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
