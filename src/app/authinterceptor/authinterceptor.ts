import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class authinterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let token;
        req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(req);
    }
}

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//     console.log('auth interceptor...');
//     return next(req);
//   };