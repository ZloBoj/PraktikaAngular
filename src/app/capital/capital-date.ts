import { Injectable } from "@angular/core";


@Injectable()
export class CapitalDate {
  public operationCategoryType: string |undefined;
    public activityType: string | undefined;
    public parentOperationCategoryId: number | undefined;
    public operationCategoryId: number = 0;
    public title: string | undefined;
    public childOperatin: CapitalDate[] |undefined;
  constructor( ){   
    }

    public findChild():void{
      
    }
}
