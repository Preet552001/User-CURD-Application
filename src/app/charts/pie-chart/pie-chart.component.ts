import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import{Chart, registerables} from 'node_modules/chart.js'
import{ChartDataService}from'../../service/chart-data.service'
Chart.register(...registerables)
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  constructor(private gender:ChartDataService){}
  @Input() piedata;
  
  lable:any[]=[]
  data:any[]=[]
  bgColor:any[]=[]


  ngOnInit(){
    // console.log("child")
    this.gender.genderVal$.asObservable().subscribe((data)=>{
        this.lable=[]
        this.data=[]
        // this.bgColor=[]
      data.forEach(element=>{
        // console.log(element)
        this.lable.push(element.gender)
        this.bgColor.push(element.bdColor)
        this.data.push(element.data)
      })
      
    // console.log(this.lable)
    // console.log(this.bgColor)
    // console.log(this.data)
    this.RenderChar(this.lable,this.data,this.bgColor)
    })
    this.RenderChar(this.lable,this.data,this.bgColor) 
  }
  
  RenderChar(_label,_data,_bdColor){
    // const chartCanvas = document.createElement('canvas');
    // chartCanvas.id = `chart-${index}`;
    // chartCanvas.height = 150; // Adjust the height as needed
    const existingChart = Chart.getChart('piechart');
 
    if (existingChart) {
      existingChart.destroy();
    }
    const myChart =new Chart('piechart', {
      type: 'doughnut',
      data: {
        labels: _label,
        datasets: [{
          label: 'My Dataset',
          data: _data,
          backgroundColor: _bdColor,
           borderColor:'#000000',
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          
          legend: {
            maxHeight: 20,
            // maxWidth: 150,
            position: 'right', // Set position to 'left' for labels on the left side
          labels: {
            boxHeight: 10,
             // Adjust box width if needed
            // fontStyle: 'bold' // Optional: Set font style
          }
          }
        },
        // responsive: true,
        // legend: {
        //   position: 'left', // Set position to 'left' for labels on the left side
        //   labels: {
        //     boxWidth: 20, // Adjust box width if needed
        //     fontStyle: 'bold' // Optional: Set font style
        //   }
        // },
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 1, // Adjust aspect ratio as needed
        // height: 100 
    }

      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }
}
