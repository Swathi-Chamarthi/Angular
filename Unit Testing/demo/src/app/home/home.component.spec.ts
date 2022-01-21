// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

fdescribe('HomeComponent',() => {
  it('This is the first test script',() =>{
    var a= 10*2
    expect(a).toBe(20)
  })

  it('This is the second test script',() =>{
    function add(c,d){
      var x=c+d
      return x
    }
    var result1 = add(50,50)
    expect(result1).toBe(100)
  })
})
