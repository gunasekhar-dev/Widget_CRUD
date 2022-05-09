import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWidgetComponent } from './add-widget/add-widget/add-widget.component';
import { ComponentIdComponent } from './component-id/component-id.component';
import { ComponentViewComponent } from './component-view/component-view/component-view.component';
import { ErrorHandleComponent } from './error-handling/error-handle/error-handle.component';
import { WidgetReviewComponent } from './widget-review/widget-review.component';
import { WidgetViewComponent } from './widget-view/widget-view.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetReviewComponent,
  },
  {
    path: 'api/widgets',
    component: WidgetReviewComponent,
  },
  {
    path: 'api/widgets/add',
    component: AddWidgetComponent,
  },
  {
    path: 'api/components',
    component: ComponentViewComponent,
  },
  {
    path: 'api/components/view',
    component: ComponentIdComponent,
  },
  {
    path: 'api/widgets/:id',
    component: WidgetViewComponent,
  },
  {
    path: 'api/components/:id',
    component: ComponentViewComponent,
  },
  {
    path: '**',
    component: ErrorHandleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
