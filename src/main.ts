import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authinterceptor } from './app/authinterceptor/authinterceptor';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routes),
    {provide: HTTP_INTERCEPTORS, useClass: authinterceptor, multi: true}
  ]
})
  .catch((err) => console.error(err));


  // this way also we can use it but we need use the commented code in the authintercerptor 
  // bootstrapApplication(AppComponent, {
  //   providers:[
  //     provideRouter(routes),
  //     provideHttpClient(
  //       withInterceptors([authInterceptor])
  //     )
  //   ]
  // })
  //   .catch((err) => console.error(err));
