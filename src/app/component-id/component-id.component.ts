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



  ngOnInit(): void {


    this.widgetService.getComponent().subscribe((res) => {
      this.ComponentWidget = res;

    });
  }
}
