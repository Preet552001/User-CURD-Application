import { Component, Input } from '@angular/core';
import{Chart, registerables} from 'node_modules/chart.js'
import{ChartDataService}from'../../service/chart-data.service'

Chart.register(...registerables)
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  constructor(private birthday:ChartDataService){}

  @Input() bardata:any[];
  lable:any[]=[]
  data:any[]=[]
  bgColor:any[]=[]

  ngOnInit(){
    // this.birthday.setData()

    this.birthday.birthdayMonth$.asObservable().subscribe((data)=>{
      this.lable=[]
      this.data=[]
  // bgColor:any[]=[]
      data.forEach(element=>{
        this.lable.push(element.month)
        this.data.push(element.data)
        // this.bgColor.push(element['bd-color'])
      }) 
      // console.log(data)
      this.RenderChar(this.lable,this.data,this.bgColor)
    })
    this.RenderChar(this.lable,this.data,this.bgColor)
  }
    
  RenderChar(_label,_data,_bgColor){
    const existingChart = Chart.getChart('barchart');
 
    if (existingChart) {
      existingChart.destroy();
    }
    
    const myChart =new Chart('barchart', {
      type: 'bar',
      data: {
        labels: _label,
        datasets: [{
          label: 'No. of Users Birthday in this Month',
          data: _data,
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"]
          ,
          // borderColor:_bdColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
