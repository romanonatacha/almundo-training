import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UsersEffects } from './store/user/user.effects';

import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { AppErrorHandler } from './error-handler';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ListComponent } from './components/user/list/list.component';

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument() : [];

@NgModule({
  declarations: [AppComponent, UsersComponent, ListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevTools,
    EffectsModule.forRoot([]),
    RouterModule.forRoot(
      [
        {
          path: 'counter',
          loadChildren: './components/counter/counter.module#CounterModule',
        },
        { path: '**', component: UsersComponent },
      ],
      { preloadingStrategy: PreloadAllModules },
    ),
    EffectsModule.forRoot([UsersEffects]),
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
