import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent } from './bar-chart.component';
import { ChartDataService } from '../../service/chart-data.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BirthdayData } from 'src/app/interface/birthday';

describe('Bar-Chart Component', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;
  let chartDataService: jasmine.SpyObj<ChartDataService>;

  beforeEach(async () => {
    const chartDataServiceSpy = jasmine.createSpyObj('ChartDataService',[], {birthdayMonth$: new BehaviorSubject<BirthdayData[]>([])});

    await TestBed.configureTestingModule({
      declarations: [BarChartComponent],
      providers: [{ provide: ChartDataService, useValue: chartDataServiceSpy }]
    })
      .compileComponents();

    chartDataService = TestBed.inject(ChartDataService) as jasmine.SpyObj<ChartDataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Bar-Chart Component', () => {
    expect(component).toBeTruthy();
  });
});
