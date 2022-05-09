
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentWidget } from 'src/app/Models/componentWidget.model';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.css'],
})
export class ComponentViewComponent implements OnInit {
  @Input() widgetComponents: any;

  @Output() updateWidget= new EventEmitter<{updatedComponents:ComponentWidget[] }>();

  constructor(private widgetService: WidgetService) {}

  ComponentWidget: ComponentWidget[] = [];

  newComponent: ComponentWidget = {
    name: '',
    description: '',
    optional: true,
    id: ''
  };

  ngOnInit(): void {

    this.ComponentWidget = this.widgetComponents.components;
  }

  onAdd(){
  // this.addNewWidget.emit('');
  this.widgetComponents.push(this.newComponent);
  }

  onDeleteComp(comp: ComponentWidget){
   this.widgetComponents= this.widgetComponents.filter((obj:ComponentWidget ) => obj.id != comp.id);
   this.updateWidget.emit({updatedComponents: this.widgetComponents});
  }
}

