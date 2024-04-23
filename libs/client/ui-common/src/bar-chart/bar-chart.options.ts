import { ChartConfiguration } from 'chart.js';

export const barChartOptions: ChartConfiguration<'bar'>['options'] = {
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {},
    y: {
      min: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
