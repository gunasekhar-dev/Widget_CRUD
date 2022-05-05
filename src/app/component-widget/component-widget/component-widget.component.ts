import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewComponent } from 'src/app/Models/newComponent.model';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-component-widget',
  templateUrl: './component-widget.component.html',
  styleUrls: ['./component-widget.component.css'],
})
export class ComponentWidgetComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private widgetService: WidgetService) {}
  newComponent: NewComponent = {
    name: '',
    description: '',
    optional: true,
  };

  ngOnInit(): void {}

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }
}
