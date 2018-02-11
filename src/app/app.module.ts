import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebase;


import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FeatureEntityComponent } from './components/feature-entity/feature-entity.component';
import { EntityService } from './entity.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { QuickEntryComponent } from './components/quick-entry/quick-entry.component';
import { EntitySearchComponent } from './components/entity-search/entity-search.component';
import { ManageTodosComponent } from './components/manage-todos/manage-todos.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoParentEntitiesComponent } from './components/no-parent-entities/no-parent-entities.component';
import { ViewService } from './view.service';
import { RelatedEntitiesComponent } from './components/related-entities/related-entities.component';
import { FocusEntitiesComponent } from './components/focus-entities/focus-entities.component';
import { SearchPipe } from './pipes/search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FeatureEntityComponent,
    RelatedEntitiesComponent,
    QuickEntryComponent,
    EntitySearchComponent,
    ManageTodosComponent,
    NoParentEntitiesComponent,
    FocusEntitiesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [EntityService, ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
