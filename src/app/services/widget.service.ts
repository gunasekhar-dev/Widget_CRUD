import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponentWidget } from '../Models/componentWidget.model';
import { NewComponent } from '../Models/newComponent.model';
import { UpdateWidget } from '../Models/updateWidget.model';
import { Widget } from '../Models/widget.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  constructor(private http: HttpClient,private router: Router) {
    this.apiCount.subscribe((result) => {
      this.apiCallCount = result;
    });
  }


  errorMessage = new BehaviorSubject<any>('');

  apiCount = new BehaviorSubject<number>(0);

  apiCallCount: number = 0;

  apiBaseUrl = environment.apiBaseUrl;

  getAllWidgets(): Observable<Widget[]> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.get<Widget[]>(this.apiBaseUrl + '/api/widgets').pipe(
      catchError((error) => {
        console.log('error is intercept');
        console.log(error);
        this.errorMessage.next(error);
        this.router.navigateByUrl("/api/error");
        return throwError(error.message);
      })
    );
  }

  getWidgetById(id: string): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.get<Widget>(this.apiBaseUrl + '/api/widgets/' + id).pipe(
      catchError((error) => {
        console.log('error is intercept');
        console.log(error);
        this.errorMessage.next(error);
        this.router.navigateByUrl("/api/error");
        return throwError(error.message);
      })
    );
  }

  updateWidget( id: string | undefined,updateWidget: UpdateWidget): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http
      .put<Widget>(this.apiBaseUrl + '/api/widgets/' + id, updateWidget)
      .pipe(
        catchError((error) => {
          console.log('error is intercept');
          console.log(error);
          this.errorMessage.next(error);
          this.router.navigateByUrl("/api/error");
          return throwError(error.message);
        })
      );
  }

  addPost(addWidget: UpdateWidget): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.post<Widget>(this.apiBaseUrl + '/api/widgets', addWidget).pipe(
      catchError((error) => {
        console.log('error is intercept');
        console.log(error);
        this.errorMessage.next(error);
        this.router.navigateByUrl("/api/error");
        return throwError(error.message);
      })
    );
  }

  deleteWidget(id: string | undefined): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.delete<Widget>(this.apiBaseUrl + '/api/widgets/' + id).pipe(
      catchError((error) => {
        console.log('error is intercept');
        console.log(error);
        this.errorMessage.next(error);
        this.router.navigateByUrl("/api/error");
        return throwError(error.message);
      })
    );
  }

  getComponent(): Observable<ComponentWidget[]> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.get<ComponentWidget[]>(
      this.apiBaseUrl + '/api/components'
    ).pipe(
      catchError((error) => {
        console.log('error is intercept');
        console.log(error);
        this.errorMessage.next(error);
        this.router.navigateByUrl("/api/error");
        return throwError(error.message);
      })
    );
  }

}
