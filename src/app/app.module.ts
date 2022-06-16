import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Component Imports
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from '../app/add-user/add-user.component';
import { HighlightTextDirective } from './directives/highlightText.directive';
import { RendererHighlightDirective } from './directives/rendererHighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserComponent,
    UsersComponent,
    HighlightTextDirective,
    RendererHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
