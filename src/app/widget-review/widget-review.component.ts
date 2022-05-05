import { Component, OnInit } from '@angular/core';
import { Widget } from '../Models/widget.model';
import { WidgetService } from '../services/widget.service';


@Component({
  selector: 'app-widget-review',
  templateUrl: './widget-review.component.html',
  styleUrls: ['./widget-review.component.css']
})
export class WidgetReviewComponent implements OnInit {

  constructor(private widgetService: WidgetService) { }

  widget: Widget[]=[];

  apiCount : number = 0;

  ngOnInit(): void {
     this.widgetService.apiCount.subscribe(result =>
      {
       this.apiCount=result;
      }
      );

    this.widgetService.getAllWidgets().subscribe(
      res =>{ this.widget=res;}
    );
  }

  getComponents(){
    this.widgetService.getComponent().subscribe(
      res => {
        console.log(res);
      }

    );
  }

}
