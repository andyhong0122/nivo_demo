import React from 'react';

//charts
import { lineData, pieData, barData, heatmapData, waffleData } from './visualizations/data/chartData';

const ChartDataObject = ({ selectedChart }) => {
  const charts = ['Bar', 'Heatmap', 'Line', 'Pie', 'Waffle'];
  let dataObject;

  charts.forEach((type) => {
    if (selectedChart) {
      switch (selectedChart) {
        case 'Bar':
          dataObject = barData;
          break;
        case 'Heatmap':
          dataObject = heatmapData;
          break;
        case 'Line':
          dataObject = lineData;
          break;
        case 'Pie':
          dataObject = pieData;
          break;
        case 'Waffle':
          dataObject = waffleData;
          break;
        default:
          console.log(`Undefined chart type; add ${selectedChart} to array`);
      }
    }
    return false;
  });

  return <pre style={{ padding: '10px' }}>{JSON.stringify(dataObject, null, 3)}</pre>;
};

export default ChartDataObject;
