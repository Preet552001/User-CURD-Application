import { Component, Input } from '@angular/core';
import{Chart, registerables} from 'chart.js'

Chart.register(...registerables)
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() linedata:any[];
  lable:any[]=[]
  data:any[]=[]
  bgColor:any[]=[]

  ngOnInit(){
    this.linedata.forEach(element=>{
      this.lable.push(element.month)
      this.data.push(element.data)
      this.bgColor.push(element['bd-color'])
      // console.log(element)
    })
    this.RenderChar(this.lable,this.data)
  }


  RenderChar(_label,_data){
    const myChart =new Chart('linechart', {
      type: 'line',
      data: {
        labels: _label,
        datasets: [{
          label: 'My Dataset',
          data: _data,
          fill: false,
          // backgroundColor:_bgColor,
          borderColor: 'rgb(75, 192, 192)',
          // borderWidth: 1,
          tension: 0.1
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
