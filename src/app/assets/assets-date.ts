import { Injectable } from "@angular/core";


@Injectable()
export class Assets {
  public operationCategoryType: string |undefined;
    public activityType: string | undefined;
    public parentOperationCategoryId: number | undefined;
    public operationCategoryId: number = 0;
    public title: string | undefined;
    public childOperatin: Assets[] |undefined;
  constructor( ){   
    }

    public findChild():void{
      
    }
}