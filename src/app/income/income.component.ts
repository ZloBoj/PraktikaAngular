import { Component, OnInit } from '@angular/core';
import { inCome } from './in';
import { HttpClient } from '@angular/common/http';
import { IncomeDataService } from './income-data.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: [IncomeDataService]
})

export class IncomeComponent implements OnInit {
  inz : inCome[] = [];
  incomeData : inCome[] = [];
  idIncome: number | undefined;
  idDelete: number |undefined;
  constructor(private IncomeDataService:IncomeDataService){

 
  }

  ngOnInit(): void {
    this.IncomeDataService.getData().subscribe((data:any) => {
      this.inz = data["data"]["items"]
      this.inz.forEach(item => {
        if (item.operationCategoryType == "Income") {
            this.incomeData.push(item);
            if(item.title == "Доходы")
            this.idIncome = item.operationCategoryId;
        }
      })
      
    });
    
  }
  deleteNode(Node:inCome){
    this.incomeData.forEach(item=>{
      if(item.operationCategoryId == Node.operationCategoryId)
      {
        this.idDelete = this.incomeData.indexOf(item);
        this.incomeData.splice(this.idDelete, 1);
        this.IncomeDataService.deleteData(this.idDelete);
      }
      console.log (this.idDelete);

    })
  }

}
