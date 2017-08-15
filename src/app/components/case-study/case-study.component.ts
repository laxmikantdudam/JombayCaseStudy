import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {
  loadCaseStudy=false;
	pages = [];
	questions = [];
	page = {};
	question = {};
	currentPage = 0;
	currentQuestion = 0;
	showCaseStudyFlag = true;
	caseStudyName = "";
  time = "";
  sessionStartedTime={
    mins:0,
    sec:0
  };
	constructor(private dataService:DataService) { }
	ngOnInit() {	
		this.dataService.getCaseStudyData().subscribe((caseStudyData)=>{
        this.loadCaseStudy=true;
  			this.pages = caseStudyData.user_company_case_study.company_case_study.pages;
  			this.questions = caseStudyData.user_company_case_study.company_case_study.questions;
  			this.caseStudyName = caseStudyData.user_company_case_study.company_case_study.name;
        this.time = caseStudyData.user_company_case_study.company_case_study.time;
  			this.getCurrentQuestion(0);
			this.getCurrentPage();
  		});	
      setInterval(() => {
        let d2:any = new Date();
        let d1:any = new Date(sessionStorage.getItem("sessionStartedTime"));
        this.sessionStartedTime.mins = Math.floor(((d2-d1)/1000/60));
        this.sessionStartedTime.sec = Math.floor(((d2-d1)/1000)%60);
      }, 1000);
  }

  getCurrentQuestion(index){
		this.question = this.questions[index];
		this.currentQuestion = index;
	}
	showCaseStudy(){
		this.currentPage = 0
	this.showCaseStudyFlag = true;
	this.getCurrentPage();
	}
	showQuetions(index){
		this.showCaseStudyFlag = false;
		this.getCurrentQuestion(index);
	}
	changeView(val){
		if(val == 'caseStudy'){
		this.showCaseStudyFlag = true;
		}else{
			this.showCaseStudyFlag = false;
		}
	}
	getCurrentPage(){
		this.page = this.pages[this.currentPage];
	}
	changePage(val){
		if(val=='next')
			this.currentPage++;
		else
			this.currentPage--;
		this.getCurrentPage();
	}
	changeQuestion(val){
		if(val=='next')
			this.currentQuestion++;
		else
			this.currentQuestion--;
	}
  submitCaseStudy(){
    console.log(this.question);//we can use this data to submit answers to api
    alert("To submit answers no API endpoint is provided so here I am showing alert message");
  }
}