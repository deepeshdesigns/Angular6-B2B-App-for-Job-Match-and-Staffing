import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');

    
  }));

  /* --- TEST CASES TO TEST THE DATA ------------------------------------------------------------------------------*/

  //Test 1 - Test the title of job details

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.jobDetails.title).toEqual('Construction and Releated Workers - General');
    
  }));


  //Test 2 - Test the company name 

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.jobDetails.company.name).toEqual('C.D. Barnes and Associates”,');
    
  }));


  //Test 3 - Test the company address

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.jobDetails.company.address).toEqual('123 Main Street, Tacoma, WA 98409');
    
  }));


  //Test 4 - Test the wages 

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.jobDetails.wagePerHourInCents).toEqual('850');
    
  }));


   //Test 5 - Test the start date of the engagement

   it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.jobDetails.shifts[0].startDate).toEqual('016-09-04T21:00:00Z');
    
  }));


  /*----------------------END OF CUSTOM UNIT TEST CASES ---------------------*/

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.jobDetails.title).toEqual('Construction and Releated Workers - General');
    
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  }));



});



