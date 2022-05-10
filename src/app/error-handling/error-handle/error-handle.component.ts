import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.css']
})
export class ErrorHandleComponent implements OnInit {

  constructor(private widgetService: WidgetService) { }
  errorMessage: any;
  errorStatusCode: any;

  ngOnInit(): void {

  this.widgetService.errorMessage.subscribe(res => {

    this.errorMessage= res.error.message;
    this.errorStatusCode = res.status;
  })

  }



}
