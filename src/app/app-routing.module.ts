import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ExamplesComponent } from './examples/examples.component';
import { ApiComponent } from './api/api.component';
import { InstallComponent } from './install/install.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  { path: '', component: GettingStartedComponent },
  { path: 'api', component: ApiComponent },
  { path: 'api', children: [
      {
          path: "**",
          component: ApiComponent
      }
    ]},
  { path: 'api/:name', component: ApiComponent },
  { path: 'api/**', component: ApiComponent },
  { path: 'tutorials', component: TutorialComponent },
  { path: 'tutorials/:name', component: TutorialComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'examples/:name', component: ExamplesComponent },
  { path: 'install', component: InstallComponent},
  { path: 'community', component: CommunityComponent}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 128],
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
