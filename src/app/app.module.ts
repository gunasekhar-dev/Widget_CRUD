import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetReviewComponent } from './widget-review/widget-review.component';
import { FormsModule } from '@angular/forms';
import { WidgetViewComponent } from './widget-view/widget-view.component';
import { AddWidgetComponent } from './add-widget/add-widget/add-widget.component';
import { ComponentWidgetComponent } from './component-widget/component-widget/component-widget.component';
import { ComponentViewComponent } from './component-view/component-view/component-view.component';
import { ComponentIdComponent } from './component-id/component-id.component';
import { ErrorHandleComponent } from './error-handling/error-handle/error-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetReviewComponent,
    WidgetViewComponent,
    AddWidgetComponent,
    ComponentWidgetComponent,
    ComponentViewComponent,
    ComponentIdComponent,
    ErrorHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
