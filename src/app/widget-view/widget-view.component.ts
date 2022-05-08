import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  widget: Widget | undefined;


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
      components: this.widget?.components,
      count: this.widget?.count,
    };

    this.widgetService
      .updateWidget(this.widget?.id, updateWidget)
      .subscribe((res) => {
        alert('success');

      });
  }

  deletePost() {
    this.widgetService.deleteWidget(this.widget?.id).subscribe((res) => {
      alert('deleted successfully');
      this.router.navigateByUrl("/api/widgets");
    });
  }
}
