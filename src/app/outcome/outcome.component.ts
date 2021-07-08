import { Component, OnInit } from '@angular/core';
import { outCome } from './out';
import { HttpClient } from '@angular/common/http';
import { IncomeDataService } from '../income/income-data.service';
@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
  providers: [IncomeDataService]

})
export class OutcomeComponent implements OnInit {
  out : outCome[] = [];
  outDate : outCome[] = [];
  idOutcome: number | undefined;
  idDelete: number | undefined;
  idDataDelete: number = 0;
  constructor(private IncomeDataService:IncomeDataService){
  }
  ngOnInit(): void {
    this.IncomeDataService.getData().subscribe((data:any) => {
      this.out = data["data"]["items"]
      this.out.forEach(item => {
        if (item.operationCategoryType == "Outcome") {
            this.outDate.push(item);
            if(item.title == "Расходы")
            this.idOutcome = item.operationCategoryId;
        }
      })
      
    });
  }
  number: Number | undefined;
  deleteNode(Node:outCome){
    this.outDate.forEach(item=>{
      if(item.operationCategoryId == Node.operationCategoryId)
      {
        this.idDelete = this.outDate.indexOf(item);
        this.idDataDelete = item.operationCategoryId;
        this.outDate.splice(this.idDelete, 1);
        this.IncomeDataService.deleteData(this.idDataDelete);
      }
      console.log (this.idDelete);

    })
  }
  onSelect (): void{
    this.number = 20;
  }
}
