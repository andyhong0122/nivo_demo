import React from 'react';

//charts
import Bar from './visualizations/bar';
import Heatmap from './visualizations/heatmap';
import Line from './visualizations/line';
import Pie from './visualizations/pie';
import Waffle from './visualizations/waffle';

const SelectedChart = ({ selectedChart }) => {
  const charts = ['Bar', 'Heatmap', 'Line', 'Pie', 'Waffle'];
  let chartType;

  charts.forEach((type) => {
    if (selectedChart) {
      switch (selectedChart) {
        case 'Bar':
          chartType = <Bar />;
          break;
        case 'Heatmap':
          chartType = <Heatmap />;
          break;
        case 'Line':
          chartType = <Line />;
          break;
        case 'Pie':
          chartType = <Pie />;
          break;
        case 'Waffle':
          chartType = <Waffle />;
          break;
        default:
          console.log(`Undefined chart type; add ${selectedChart} to array`);
      }
    }
    return false;
  });

  return <>{chartType}</>;
};

export default SelectedChart;
