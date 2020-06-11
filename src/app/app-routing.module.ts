import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

// Import des composant qui seront routés
import { UsersComponent }           from './users/users.component';
import { SafesComponent }           from './safes/safes.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { SafeDetailsFtrComponent }  from './safe-details-ftr/safe-details-ftr.component';
import { UserDetailsFtrComponent }  from './user-details-ftr/user-details-ftr.component';

// Création des routes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'safes', component: SafesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'safe-details/:id', component: SafeDetailsFtrComponent },
  { path: 'user-details/:id', component: UserDetailsFtrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
