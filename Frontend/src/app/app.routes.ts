import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from './core/modules/page-not-found/page-not-found.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  relativeLinkResolution: 'legacy'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path:'user',
    loadChildren: () => import('../app/core/modules/user/user.module').then(m => m.UserModule)
  },
  {
    path:'property',
    loadChildren: () => import('../app/modules/property/property.module').then(m => m.PropertyModule)
  },
  { path: 'page_not_found', component: PageNotFoundComponent },
  {
    path: '**',
    redirectTo: 'page_not_found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutes { }

