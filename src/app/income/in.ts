import { Injectable } from "@angular/core";
import { IncomeDataService } from "./income-data.service";

@Injectable()
export class inCome {
  public operationCategoryType: string |undefined;
    public activityType: string | undefined;
    public parentOperationCategoryId: number | undefined;
    public operationCategoryId: number = 0 ;
    public title: string | undefined;
    public childOperatin: inCome[] |undefined;
  constructor( ){   
    }

    public findChild(node: inCome):void{
      node.title = "22";
    }
}
