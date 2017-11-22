import { CustomMaterialModule } from '../material/custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpModule } from '@angular/http';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    SharedModule,
    CustomMaterialModule,
    HttpModule
  ],
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserDetailsComponent
  ],
  entryComponents: [
    UserDetailsComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
