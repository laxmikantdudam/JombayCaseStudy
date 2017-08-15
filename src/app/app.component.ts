import { Component } from '@angular/core';
import { DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  getAuthrization = false;
  constructor(private dataService:DataService) { 
	
  }
  ngOnInit() {
    let params = {
      grant_type: 'password',
      scope:'user',
      client_id:'4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5',
      client_secret:'908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88',
      auth_token:'azd4jXWWLagyb9KzgfDJ'
    }
  
    let accessToken = "";
    this.dataService.getAuthrization(params).subscribe((authrization)=>{
      this.getAuthrization = true;
      if(sessionStorage.getItem("accessToken") == null){
        sessionStorage.setItem("accessToken",authrization.access_token);  
      }
      if(sessionStorage.getItem("sessionStartedTime") == null){
        sessionStorage.setItem("sessionStartedTime",Date());
      }
    });
  }

}
