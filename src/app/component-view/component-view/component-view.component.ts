import { Component, Input, OnInit } from '@angular/core';
import { ComponentWidget } from 'src/app/Models/componentWidget.model';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.css'],
})
export class ComponentViewComponent implements OnInit {
  @Input() widgetComponents: any;

  constructor(private widgetService: WidgetService) {}

  ComponentWidget: ComponentWidget[] = [];

  apiCount: number = 0;

  ngOnInit(): void {
    this.widgetService.apiCount.subscribe((result) => {
      this.apiCount = result;
    });
    this.widgetService.getComponent().subscribe((res) => {
      this.ComponentWidget = res;
      this.widgetService.apiCount.next(this.apiCount + 1);
    });
  }
}