import { Component, OnInit } from '@angular/core';
import { Assets } from './assets-date';
import { HttpClient } from '@angular/common/http';
import { IncomeDataService } from '../income/income-data.service';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
  providers: [IncomeDataService]
})
export class AssetsComponent implements OnInit {
  assets : Assets[] = [];
  assetsDate : Assets[] = [];
  idAssets: number | undefined;
  idDelete: number | undefined;
  constructor(private IncomeDataService:IncomeDataService){
  }

  ngOnInit(): void {
    this.IncomeDataService.getData().subscribe((data:any) => {
      this.assets = data["data"]["items"]
      this.assets.forEach(item => {
        if (item.operationCategoryType == "Assets") {
            this.assetsDate.push(item);
            if(item.title == "Активы")
            this.idAssets = item.operationCategoryId;
        }
      })
      
    });
  }
  
  deleteNode(Node:Assets){
    this.assetsDate.forEach(item=>{
      if(item.operationCategoryId == Node.operationCategoryId)
      {
        this.idDelete = this.assetsDate.indexOf(item);
        this.assetsDate.splice(this.idDelete, 1);
        this.IncomeDataService.deleteData(this.idDelete);
      }
      console.log (this.idDelete);

    })
  }
}
