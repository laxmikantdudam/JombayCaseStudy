import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DataService {

  constructor(public http:Http) {
  	
  }

  getAuthrization(data){
    let url = "https://simulationapi.ur-nl.com/oauth/token.json";
  	return this.ajaxPost(url,data,{});
  }

  getUserData(){
    let url = "https://simulationapi.ur-nl.com/users/current.json";
    return this.ajaxGet(url,this.setHeaders());
  }

  setHeaders(){
    let headers = new Headers();
    let requestOptions = new RequestOptions({ headers: headers });
    headers.append('Authorization', 'Bearer '+sessionStorage.getItem("accessToken"));
    headers.append('Content-Type', 'application/json');
    return requestOptions;
  }

  getCaseStudyData(){
    let url = "https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions";
  	return this.http.get(url,this.setHeaders())
	  .map(res => res.json());  
  }

  ajaxPost(url,data,headers){
    return this.http.post(url,data,headers)
    .map(res => res.json());  
  }

  ajaxGet(url,headers){
    return this.http.get(url,headers)
    .map(res => res.json());  
  }
}
