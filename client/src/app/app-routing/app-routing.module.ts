import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from '../configurator/configurator/configurator.component';

const appRoutes: Routes = [{ path: 'configurator/:did/:wvm/:wvmid/e/:eid', component: ConfiguratorComponent },
    { path: '**', redirectTo: 'configurator/c4624b782da9239afc3c33a2/v/8d706da123e243ae1fd39b56/e/b96f9bb8fa37ba083883d7dc' }];
  //{ path: '**', redirectTo: 'configurator/9558507b2d8feaea012281be/v/ef47a69cee64730a99017b43/e/a8d9da8f108b44b9fa903800' }];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
