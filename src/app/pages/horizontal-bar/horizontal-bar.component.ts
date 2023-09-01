import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent implements OnInit{

  @Input() probabilityCounts: { probability: string; count: number }[] = [];

  private chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const labels = this.probabilityCounts.map((item) => item.probability);
    const data = this.probabilityCounts.map((item) => item.count);
  
    const backgroundColors = data.map((count, index) => {
      const probability = labels[index];
      if (probability === 'High') {
        return 'rgba(0, 128, 0, 0.6)';
      } else if (probability === 'Medium') {
        return 'rgba(255, 182, 193, 0.6)';
      } else if (probability === 'Low') {
        return 'rgba(255, 99, 71, 0.6)';
      } else {
        return 'rgba(0, 0, 0, 0.6)'; 
      }
    });
  
    this.chart = new Chart('ProbabilityChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Count',
            data: data,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        aspectRatio: 2.5, 
      }
    });

  }

}
  
