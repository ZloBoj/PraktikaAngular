import { Component, OnInit } from '@angular/core';
import { CapitalDate } from './capital-date';
import { IncomeDataService } from '../income/income-data.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
  providers: [IncomeDataService]
})
export class CapitalComponent implements OnInit {
  Capital : CapitalDate[] = [];
  capitalData : CapitalDate[] = [];
  idCapital: number | undefined;
  idDelete: number | undefined;
  idDeleteData: number = 0;
  constructor(private IncomeDataService:IncomeDataService){

 
  }

  ngOnInit(): void {
    this.IncomeDataService.getData().subscribe((data:any) => {
      this.Capital = data["data"]["items"]
      this.Capital.forEach(item => {
        if (item.operationCategoryType == "Capital") {
            this.capitalData.push(item);
            if(item.title == "Капитал")
            this.idCapital = item.operationCategoryId;
        }
      })
      
    });
  }

  deleteNode(Node:CapitalDate){
    this.capitalData.forEach(item=>{
      if(item.operationCategoryId == Node.operationCategoryId)
      {
        this.idDelete = this.capitalData.indexOf(item);
        this.idDeleteData = Node.operationCategoryId;
        this.IncomeDataService.deleteData(this.idDeleteData);
        this.capitalData.splice(this.idDelete, 1);
      }


    })
  }

}
