import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { audiDetailsComponent } from './audi-details/audi-details.component';
import {audiService} from './services/audi.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { audiCreateComponent } from './audi-create/audi-create.component';
import { audiEditComponent } from './audi-edit/audi-edit.component';

//routing
const appRoutes: Routes = [
  {
    path: 'list',
    component: audiDetailsComponent
  },
  {
    path: 'create',
    component: audiCreateComponent
  },
  {
    path: 'edit/:id',
    component: audiEditComponent
  }
];

//modulue declaration
@NgModule({
  declarations: [
    AppComponent,
    audiDetailsComponent,
    audiCreateComponent,
    audiEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [audiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
