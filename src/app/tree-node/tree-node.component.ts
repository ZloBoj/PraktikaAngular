import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { inCome } from '../income/in';
import { Input } from '@angular/core';
import { IncomeDataService } from '../income/income-data.service';
@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
  providers: [IncomeDataService]
})
export class TreeNodeComponent implements OnInit {
  @Input() Date : inCome[] = [];
  @Input() incomeKeyIdData : number | undefined;
  idDelete : number = 0;
  idDeleteData: number = 0;
  constructor(private IncomeDataService:IncomeDataService) { }
  ngOnInit(): void {
  }
  deleteNode(Node:inCome){
    this.Date.forEach(item=>{
      if(item.operationCategoryId == Node.operationCategoryId)
      {
        this.idDelete = this.Date.indexOf(item);
        this.idDeleteData = item.operationCategoryId;
        this.Date.splice(this.idDelete, 1);
        this.IncomeDataService.deleteData(this.idDeleteData).subscribe((ok)=>{console.log(ok)});
      }
      console.log (this.idDelete);

    })
  }

}
