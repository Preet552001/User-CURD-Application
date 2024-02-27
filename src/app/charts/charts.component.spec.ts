// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ChartsComponent } from './charts.component';
// import { ChartDataService } from '../service/chart-data.service';
// import { MaterialModule } from '../material/material.module';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';

// describe('ChartsComponent', () => {
//   let component: ChartsComponent;
//   let fixture: ComponentFixture<ChartsComponent>;
// //   let fixtureBar: ComponentFixture<BarChartComponent>;
// //   let fixturePie: ComponentFixture<PieChartComponent>;
//   let chartDataService: jasmine.SpyObj<ChartDataService>;
//   let mockPieClass:Partial<PieChartComponent>
//   let mockBarClass:Partial<BarChartComponent>



//   beforeEach(async () => {
//     const chartDataServiceSpy = jasmine.createSpyObj('ChartDataService', ['setData']);
//     await TestBed.configureTestingModule({
//       declarations: [ChartsComponent,
//         // { provide: PieChartComponent },
//         // { provide: BarChartComponent }
// ],
//       imports: [MaterialModule],
//       providers: [
//         { provide: ChartDataService, useValue: chartDataServiceSpy },
//         {provide : PieChartComponent, useValue: null},
//         {provide : BarChartComponent, useValue: null},
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ChartsComponent);
//     // fixtureBar= TestBed.createComponent(BarChartComponent)
//     // fixturePie = TestBed.createComponent(PieChartComponent)
//     component = fixture.componentInstance;
//     chartDataService = TestBed.inject(ChartDataService) as jasmine.SpyObj<ChartDataService>;
//     // pieChartComponent = TestBed.inject(PieChartComponent) as jasmine.SpyObj<PieChartComponent>;
//     // barChartComponent = TestBed.inject(BarChartComponent) as jasmine.SpyObj<BarChartComponent>;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // Add more tests to verify component interactions if needed
// });
