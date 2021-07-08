import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeDataService {

  constructor(private http: HttpClient) { }
  getData(){
    const headers = new HttpHeaders({ 'Accept': 'application/json' ,
                                      'X-ApiKey' : 'SYNbqXYjJUHI-BTLWmp4bD2jvChqO3gm6gWxDYV4DzXkf3e5GVBeh5ZeVNQvHRJgAV3QN30eoS_bEX7kuEGq4FuSZh1Hyyqywnj5LAL9VM_gUWygnYSCqp5iohEU4LtaW2pMDdc_khzwxQvRnYUrfRQNLNJUoh8iSabE_1q0cNJjjTcbPMWih8srgbNPGsQQx3GciWtNnSMPn6fEmcPiB3rjLcG58_yLonW4kdkGOWLTp_FoGqHaeLZno9yULUufy47ZxZkGXb16fepRmioggQpzUwqE54nQF4hiH9_3-FGQJLuPwCCcN2uoeiKu6PHGRis6VvoMv3rvjHw83Qp0Z29dbv9k1bBKdZj4iSvGk9bq59pkMawLacGGGGpbb3SDxoZEaq02M2_OllDMUwdALWUhQ_0ZnDT5YJ4GcEgQvntCWAa7jynVzIeGzkvBKCf3BXWlkeKd8DJb-7ld8rBKy4EkNiVHXi-t9KtxY8-QOQ596QW3ES28ueB2HKKoyqpKNFy2UCvtPlBNF_5e-H4uCIIlG_-frKuvbvK6UdayvnraEPg9_VLF_WBV97fs_-u_YVlqGD1eSfzhxZIaXRWeKTKLfolJwE1W9cMMZIZ7ggV-0yjB' });
    const options = { headers: headers }; 
    return this.http.get("https://api.planfact.io/api/v1/operationcategories?paging.limit=100", options);
}

  deleteData(idDeleteNode : number){
    const headers = new HttpHeaders({ 'Accept': 'application/json' ,
                                      'X-ApiKey' : 'SYNbqXYjJUHI-BTLWmp4bD2jvChqO3gm6gWxDYV4DzXkf3e5GVBeh5ZeVNQvHRJgAV3QN30eoS_bEX7kuEGq4FuSZh1Hyyqywnj5LAL9VM_gUWygnYSCqp5iohEU4LtaW2pMDdc_khzwxQvRnYUrfRQNLNJUoh8iSabE_1q0cNJjjTcbPMWih8srgbNPGsQQx3GciWtNnSMPn6fEmcPiB3rjLcG58_yLonW4kdkGOWLTp_FoGqHaeLZno9yULUufy47ZxZkGXb16fepRmioggQpzUwqE54nQF4hiH9_3-FGQJLuPwCCcN2uoeiKu6PHGRis6VvoMv3rvjHw83Qp0Z29dbv9k1bBKdZj4iSvGk9bq59pkMawLacGGGGpbb3SDxoZEaq02M2_OllDMUwdALWUhQ_0ZnDT5YJ4GcEgQvntCWAa7jynVzIeGzkvBKCf3BXWlkeKd8DJb-7ld8rBKy4EkNiVHXi-t9KtxY8-QOQ596QW3ES28ueB2HKKoyqpKNFy2UCvtPlBNF_5e-H4uCIIlG_-frKuvbvK6UdayvnraEPg9_VLF_WBV97fs_-u_YVlqGD1eSfzhxZIaXRWeKTKLfolJwE1W9cMMZIZ7ggV-0yjB' });
    let httpParams = new HttpParams().set( "", idDeleteNode );
    const options = { headers: headers,
                     // params: httpParams 
                    }; 

    return this.http.delete("https://api.planfact.io/api/v1/operationcategories/" + idDeleteNode, options);
  }
}

