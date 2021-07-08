import { Injectable } from "@angular/core";


@Injectable()
export class LiabilitiesDate {
  public operationCategoryType: string |undefined;
    public activityType: string | undefined;
    public parentOperationCategoryId: number | undefined;
    public operationCategoryId: number = 0;
    public title: string | undefined;
    public childOperatin: LiabilitiesDate[] |undefined;
  constructor( ){   
    }

    public findChild():void{
      
    }
}
