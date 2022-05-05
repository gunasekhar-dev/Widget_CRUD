import { Component, OnInit } from '@angular/core';
import { ComponentWidget } from '../Models/componentWidget.model';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-component-id',
  templateUrl: './component-id.component.html',
  styleUrls: ['./component-id.component.css'],
})
export class ComponentIdComponent implements OnInit {
  constructor(private widgetService: WidgetService) {}

  ComponentWidget: ComponentWidget[] = [];

  apiCount : number = 0;

  ngOnInit(): void {
    this.widgetService.apiCount.subscribe(result =>
      {
       this.apiCount=result;
      }
      );

    this.widgetService.getComponent().subscribe((res) => {
      this.ComponentWidget = res;
      this.widgetService.apiCount.next(this.apiCount+1);
    });
  }
}
