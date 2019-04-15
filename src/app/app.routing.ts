import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes : Routes = [
    { path : '' , redirectTo: '/home', pathMatch : 'full' },
    { path : '' , loadChildren: './features/pages/pages.module#PagesModule'}
];

export const AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(routes);