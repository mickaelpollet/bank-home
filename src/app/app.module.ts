import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SafesComponent } from './safes/safes.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsFtrComponent } from './user-details-ftr/user-details-ftr.component';
import { UserEditFtrComponent } from './user-edit-ftr/user-edit-ftr.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SafeDetailsFtrComponent } from './safe-details-ftr/safe-details-ftr.component';

// In-Memory Web API : Pour tests HTTP
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SafesComponent,
    UsersComponent,
    UserDetailsFtrComponent,
    UserEditFtrComponent,
    MessagesComponent,
    DashboardComponent,
    SafeDetailsFtrComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
