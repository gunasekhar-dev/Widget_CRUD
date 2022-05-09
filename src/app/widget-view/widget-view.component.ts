import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentWidget } from '../Models/componentWidget.model';
import { NewComponent } from '../Models/newComponent.model';
import { UpdateWidget } from '../Models/updateWidget.model';
import { Widget } from '../Models/widget.model';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget-view',
  templateUrl: './widget-view.component.html',
  styleUrls: ['./widget-view.component.css'],
})
export class WidgetViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService
  ) {}
  @Output() newEvent = new EventEmitter<string>();
  widget: Widget | undefined ;
  public error: any;

  newComponent: ComponentWidget = {
    name: '',
    description: '',
    optional: true,
    id: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.widgetService.getWidgetById(id).subscribe((res) => {
          this.widget = res;
          console.log(res);

        });
      }
    });
  }

  onSubmit(): void {
    const updateWidget: UpdateWidget = {
      name: this.widget?.name,
      description: this.widget?.description,
      components: this.widget?.components? this.widget.components : [],
      count: this.widget?.count,
    };

    this.widgetService
      .updateWidget(this.widget?.id, updateWidget)
      .subscribe((_res) => {
        alert('success');

      }
      );
  }

  deletePost() {
    this.widgetService.deleteWidget(this.widget?.id).subscribe( next => {
      alert('deleted successfully');
      console.log(next)
      this.router.navigateByUrl("/api/widgets");
    },
    error => { // second parameter is to listen for error
      console.log(error);
      this.error = error;
    });
  }

  OnUpdateWidget(event: any) {
    if(this.widget)
     this.widget.components = event.updatedComponents;
  }
}
