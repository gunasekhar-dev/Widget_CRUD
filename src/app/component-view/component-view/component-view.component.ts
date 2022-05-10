
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
   selectedComponent : ComponentWidget | undefined;
  ComponentWidget: ComponentWidget[] = [];

  newComponent: ComponentWidget = {
    name: '',
    description: '',
    optional: true,
    id: ''
  };

  ngOnInit(): void {
    this.getComponents();
  }

  onAdd(){
  this.widgetComponents.push(this.newComponent);
  }

  onDeleteComp(comp: ComponentWidget){
   this.widgetComponents= this.widgetComponents.filter((obj:ComponentWidget ) => obj.id != comp.id);
   this.updateWidget.emit({updatedComponents: this.widgetComponents});
  }

  getComponents() {
    this.widgetService.getComponent().subscribe((res) => {
     this.ComponentWidget=res;
    });
}

addCompToWidget(){
   if(this.selectedComponent && this.selectedComponent.optional != true)
   this.selectedComponent.optional=false;
   this.widgetComponents.push(this.selectedComponent);
   this.updateWidget.emit({updatedComponents: this.widgetComponents});
}
}

