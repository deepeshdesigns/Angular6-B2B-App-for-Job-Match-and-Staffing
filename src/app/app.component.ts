import { Component, OnInit, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Http, Response, HttpModule } from '@angular/http';
import { map, startWith } from 'rxjs/operators';
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { UpdateCallback } from '@angular/core/src/testability/testability';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicesService]


})



export class AppComponent {

  constructor(public userService: ServicesService) {

  }

  /*-------------------Details of each of the variables ---------------
  1. title = dummy variable to test the title of the app 
  2. jobdetails - Type - object - Will get the payload from the service of the entire information 
  3. date = variable to manipulate with date related operations 
  4. buttonStatus - to toggle the enable/ disable of job details function 
  5. StartDate, endDate - to put the details of the start and end dates of engagement 
  6.weekday[] - to map the days of the week with the short acronym
  7.shiftsArray - Array prepared in the data format as per rendering requirement
  8. noofShifts - Assumed that the person is keen to take up 5 shifts from the start day of the engagement so picked only first 5 shift details 
  
  */



  title = 'app works!';
  jobDetails: any;
  date = new Date;
  buttonStatus: boolean = true;
  address: string;
  startDate: string;
  endDate: string;

  weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  shiftsArray = [];
  noOfShifts = 5;


  /******Details of each of the function */

  /*
  Calljob Details 
  *This function is the main function that will be called on click of Job Available button in the main screen 
  * This function will call a list of synchronous functions 
  */


  callJobDetails() {
    console.log("job details called");

    this.getJobdetails();
    this.printJobDetails();
    this.buttonStatus = !this.buttonStatus;
    this.address = this.jobDetails.company.address;
    this.getStartEndDates();

  }

  /*This function will fetch the data from the service (payload) into a component variable jobDetails */
  getJobdetails() {
    this.jobDetails = this.userService.loadUser();
  }

  /*This function will fetch the data from the service (payload) into a component variable jobDetails */

  printJobDetails() {

    for (let i = 0; i < this.noOfShifts; i++) 
    {
      let date = new Date(this.jobDetails.shifts[i].startDate);
      //Get short form of Timezone 
      var matches = date.toLocaleTimeString('en-US', { timeZoneName: "long" }).match(/\b(\w)/g);
      var acronym = matches.join('');

      //Two digit minutes computation
      let minutes: number = date.getMinutes();
      let minutesString = minutes > 9 ? minutes : '0' + minutes;

      //Build the array in the format to be rendered
      var shiftsnew = new shifts(this.weekday[date.getDay()], date.toLocaleDateString('en-US', { month: "short", day: "numeric" }), date.getHours(), minutesString, acronym.substr(4, 5));
      this.shiftsArray.push(shiftsnew);

    } // for loop ends here 

  }


/* This function is used to get the start and end dates of the engagement to be rendered */
  getStartEndDates() 
  {
    let lastindex = this.jobDetails.shifts.length - 1;
    let date = new Date(this.jobDetails.shifts[0].startDate);
    this.startDate = this.weekday[date.getDay()] + ", " + date.toLocaleDateString('en-US', { month: "short", day: "numeric" });
    date = new Date(this.jobDetails.shifts[lastindex].startDate);
    this.endDate = this.weekday[date.getDay()] + " ," + date.toLocaleDateString('en-US', { month: "short", day: "numeric" });
  }


  /* Dummy call to the service if the data would been called from an API


  useServiceMethod () {
   this.userService.getData().subscribe(d=> {
    this.someFunctionAfterDataIsReceived(d);
   }, error => {
     console.log("Error");
   }); 
  }

  *---------------------------------------------------   */

}
/* End of the component class here------------------------------------------------------------------------------------------------------- */


/* Interface class for array of objects to render data in the view */

export class shifts {
  day: string;
  startDate: string;
  hour: number;
  minutes: any;
  timeZone: string;

  constructor(Day: string, StartDate: string, Hour: number, Minutes: any, TimeZone: string) {
    this.day = Day;
    this.startDate = StartDate;
    this.hour = Hour;
    this.minutes = Minutes;
    this.timeZone = TimeZone;

  }

  

}

