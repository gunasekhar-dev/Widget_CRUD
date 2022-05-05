import { Component, OnInit } from '@angular/core';
import { UpdateWidget } from 'src/app/Models/updateWidget.model';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent implements OnInit {

  constructor(private widgetService: WidgetService) { }

  ngOnInit(): void {
  }

  addwidget: UpdateWidget = {
    name: '',
    description: '',
   components: [],
    count: 10
  }



   addItem(newItem: any) {
    this.addwidget.components?.push(newItem);
  }

  onSubmit(): void{
    console.log(this.addwidget);
    this.widgetService.addPost(this.addwidget).subscribe(res =>
     {
       console.log(res);
     })
   }




}
