import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-screen',
    loadChildren: () => import('./pages/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'transfer-propias',
    loadChildren: () => import('./pages/transfer-propias/transfer-propias.module').then( m => m.TransferPropiasPageModule)
  },
  {
    path: 'transfer-terceros',
    loadChildren: () => import('./pages/transfer-terceros/transfer-terceros.module').then( m => m.TransferTercerosPageModule)
  },
  {
    path: 'transfer-historial',
    loadChildren: () => import('./pages/transfer-historial/transfer-historial.module').then( m => m.TransferHistorialPageModule)
  },
  {
    path: 'transfer-cuentas',
    loadChildren: () => import('./pages/transfer-cuentas/transfer-cuentas.module').then( m => m.TransferCuentasPageModule)
  },
  {
    path: 'agregar-cuenta',
    loadChildren: () => import('./pages/agregar-cuenta/agregar-cuenta.module').then( m => m.AgregarCuentaPageModule)
  },
  {
    path: 'admin-inicio',
    loadChildren: () => import('./pages/admin-inicio/admin-inicio.module').then( m => m.AdminInicioPageModule)
  },
  {
    path: 'admin-crear-cuenta',
    loadChildren: () => import('./pages/admin-crear-cuenta/admin-crear-cuenta.module').then( m => m.AdminCrearCuentaPageModule)
  },
  {
    path: 'admin-acreditar-cuenta',
    loadChildren: () => import('./pages/admin-acreditar-cuenta/admin-acreditar-cuenta.module').then( m => m.AdminAcreditarCuentaPageModule)
  },
  {
    path: 'admin-cuentas',
    loadChildren: () => import('./pages/admin-cuentas/admin-cuentas.module').then( m => m.AdminCuentasPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
