import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateWidget } from '../Models/updateWidget.model';
import { Widget } from '../Models/widget.model';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget-view',
  templateUrl: './widget-view.component.html',
  styleUrls: ['./widget-view.component.css']
})
export class WidgetViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private widgetService: WidgetService) { }
  @Output() newEvent = new EventEmitter<string>();
  widget : Widget | undefined;
  apiCount : number =0;

  ngOnInit(): void {
    this.widgetService.apiCount.subscribe(result =>
      {
       this.apiCount=result;
      }
      );

    this.route.paramMap.subscribe(params =>
      {
        const id =params.get('id');

        if(id){
          this.widgetService.getWidgetById(id).subscribe(res =>
            {
              this.widget= res;
              console.log(res);
              this.widgetService.apiCount.next(this.apiCount+1);
            });

        }
      });


  }

  onSubmit(): void{
    const updateWidget: UpdateWidget = {
      name: this.widget?.name,
      description: this.widget?.description,
     components: this.widget?.components,
      count:  this.widget?.count
    }


   this.widgetService.updateWidget(this.widget?.id , updateWidget).subscribe(
     res =>{
       alert('success');
       this.widgetService.apiCount.next(this.apiCount+1);
     }

   );


  }


  deletePost()
  {
    this.widgetService.deleteWidget(this.widget?.id).subscribe(res=>
      {
        alert('deleted successfully');

      })
  }

}
