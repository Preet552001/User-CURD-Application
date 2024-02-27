import { Component } from '@angular/core';
import{Chart, registerables} from 'chart.js'
// import data from '../../assets/Chardata.json';
import{ChartDataService} from '../service/chart-data.service'
Chart.register(...registerables)


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  constructor( private chartDataSet:ChartDataService){}
ngOnInit(){
    this.chartDataSet.setData()
  }
}