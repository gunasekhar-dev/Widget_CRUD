import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponentWidget } from '../Models/componentWidget.model';
import { NewComponent } from '../Models/newComponent.model';
import { UpdateWidget } from '../Models/updateWidget.model';
import { Widget } from '../Models/widget.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  constructor(private http: HttpClient) {
    this.apiCount.subscribe((result) => {
      this.apiCallCount = result;
    });
  }

  apiCount = new BehaviorSubject<number>(0);

  apiCallCount: number = 0;

  apiBaseUrl = environment.apiBaseUrl;

  getAllWidgets(): Observable<Widget[]> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.get<Widget[]>(this.apiBaseUrl + '/api/widgets');
  }

  getWidgetById(id: string): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.get<Widget>(this.apiBaseUrl + '/api/widgets/' + id);
  }

  updateWidget(
    id: string | undefined,
    updateWidget: UpdateWidget
  ): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.put<Widget>(
      this.apiBaseUrl + '/api/widgets/' + id,
      updateWidget
    ).pipe(catchError(alert('Something went wrong')));
  }

  addPost(addWidget: UpdateWidget): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.post<Widget>(this.apiBaseUrl + '/api/widgets', addWidget).pipe(catchError(console.log("error")));
  }

  deleteWidget(id: string | undefined): Observable<Widget> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.delete<Widget>(this.apiBaseUrl + '/api/widgets/' + id);
  }
  // createComponent(newComponent: NewComponent): Observable<ComponentWidget> {
  //   this.apiCount.next(this.apiCallCount + 1);
  //   return this.http.post<ComponentWidget>(
  //     this.apiBaseUrl + '/api/components',
  //     newComponent
  //   );
  // }

  getComponent(): Observable<ComponentWidget[]> {
    this.apiCount.next(this.apiCallCount + 1);
    return this.http.get<ComponentWidget[]>(
      this.apiBaseUrl + '/api/components'
    );
  }

  // getComponentById(id: string): Observable<ComponentWidget> {
  //   this.apiCount.next(this.apiCallCount + 1);
  //   return this.http.get<ComponentWidget>(
  //     this.apiBaseUrl + '/api/components/' + id
  //   );
  // }

  // deleteComp(id: string | undefined): Observable<ComponentWidget> {
  //   this.apiCount.next(this.apiCallCount + 1);
  //   return this.http.delete<ComponentWidget>(
  //     this.apiBaseUrl + '/api/components/' + id
  //   );
  // }
}
function catchError(errorHandler: any): import("rxjs").OperatorFunction<Widget, Widget> {
  throw new Error('Function not implemented.');
}

