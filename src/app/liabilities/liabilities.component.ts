import { Component, OnInit } from '@angular/core';
import { LiabilitiesDate } from './liabilities-date';
import { HttpClient } from '@angular/common/http';
import { IncomeDataService } from '../income/income-data.service';


@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.css'],
  providers: [IncomeDataService]
})
export class LiabilitiesComponent implements OnInit {

  liabilities : LiabilitiesDate[] = [];
  liabilitiesData : LiabilitiesDate[] = [];
  idLiabilities: number | undefined;
  idDelete: number | undefined;
  constructor(private IncomeDataService:IncomeDataService){

 
  }

  ngOnInit(): void {
    this.IncomeDataService.getData().subscribe((data:any) => {
      this.liabilities = data["data"]["items"]
      this.liabilities.forEach(item => {
        if (item.operationCategoryType == "Liabilities") {
            this.liabilitiesData.push(item);
            if(item.title == "Обязательства ")
              this.idLiabilities = item.operationCategoryId;
        }
      })
      
    });
    
  }
  deleteNode(Node:LiabilitiesDate){
    this.liabilitiesData.forEach(item=>{
      if(item.operationCategoryId == Node.operationCategoryId)
      {
        this.idDelete = this.liabilitiesData.indexOf(item);
        this.liabilitiesData.splice(this.idDelete, 1);
        this.IncomeDataService.deleteData(this.idDelete);
      }
      console.log (this.idDelete);

    })
  }

}
