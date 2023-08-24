import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() stateCounts: { state: string; count: number }[] = [];

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const labels = this.stateCounts.map((item) => item.state);
    const data = this.stateCounts.map((item) => item.count);


  this.chart = new Chart('MyChart', {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Lead Count',
          data: data,
          barThickness: 30,
          backgroundColor: (context: any) => {
            const state = labels[context.dataIndex];
            if (state === 'Contact mode') {
              return 'rgba(54, 162, 235, 0.3)';
            } else if (state === 'Initial interest') {
              return 'rgba(54, 162, 235, 0.5)';
            }  else if (state === 'First Intro meeting') {
              return 'rgba(54, 162, 235, 0.8)';
            } else if (state === 'Follow up meeting') {
              return 'rgba(54, 162, 235, 1)'; 
            } else {
              return 'blue';
            }
          },
        },
      ],
    },
    options: {
      aspectRatio: 3,
      // maintainAspectRatio: false,
    },
  });
}

}


