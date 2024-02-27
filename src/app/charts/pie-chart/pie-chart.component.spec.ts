import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { ChartDataService } from '../../service/chart-data.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GenderData } from 'src/app/interface/gender';

describe('Pie-Chart Component', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let chartDataService: jasmine.SpyObj<ChartDataService>;

  beforeEach(async () => {
    const chartDataServiceSpy = jasmine.createSpyObj('ChartDataService',[], {genderVal$: new BehaviorSubject<GenderData[]>([])});

    await TestBed.configureTestingModule({
      declarations: [PieChartComponent],
      providers: [{ provide: ChartDataService, useValue: chartDataServiceSpy }]
    })
      .compileComponents();

    chartDataService = TestBed.inject(ChartDataService) as jasmine.SpyObj<ChartDataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Pie-Chart Component', () => {
    expect(component).toBeTruthy();
  });
});
