import { Component } from '@angular/core';
import { RpsService } from '../../rps.service';
import { MetricsResponse } from '../../interface';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent {

  chartDataPercentWinner: any;

  chartDataPercentHuman: any;

  chartDataPercentRobot: any;

  basicOptions: any;

  metricsHuman: MetricsResponse | undefined;

  metricsRobot: MetricsResponse | undefined;

  winnerData: number[] = [];

  winnerHumanType: number[] = [];
  winnerRobotType: number[] = [];

  constructor(rpsService: RpsService) {


    rpsService.getMetrics('human').subscribe(resp => {
      this.metricsHuman = resp;
      rpsService.getMetrics('robot').subscribe(resp => {
        this.metricsRobot = resp;
        if (this.metricsHuman) {
          this.winnerData.push(this.metricsHuman.wins);
          this.winnerData.push(this.metricsRobot.wins);

          this.winnerHumanType.push(this.metricsHuman.paper, this.metricsHuman.rock, this.metricsHuman.scissor)
          this.winnerRobotType.push(this.metricsRobot.paper, this.metricsRobot.rock, this.metricsRobot.scissor)
        }
        this.setData();
      });
    });
  }

  setData(): void {

    var labelsType: string[] = ['PAPPER', 'ROCK', 'SCISSOR']

    this.chartDataPercentWinner = {
      labels: ['Human', 'Robot'],
      datasets: [
        {
          label: ' % Winner',
          data: this.winnerData,
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.chartDataPercentHuman = {
      labels: labelsType,
      datasets: [
        {
          label: ' % Human Type Winner',
          data: this.winnerHumanType,
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.chartDataPercentRobot = {
      labels: labelsType,
      datasets: [
        {
          label: ' % Robot Type Winner',
          data: this.winnerRobotType,
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');



    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
