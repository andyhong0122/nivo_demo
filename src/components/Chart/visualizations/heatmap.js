import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import { heatmapData } from './data/chartData';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <ResponsiveCalendar
    data={heatmapData}
    from='2015-03-01'
    to='2016-07-12'
    emptyColor='#eeeeee'
    animate='true'
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    margin={{
      top: 10,
      right: 10,
      bottom: 50,
      left: 10
    }}
    yearSpacing={40}
    monthBorderColor='#ffffff'
    monthLegendOffset={10}
    dayBorderWidth={2}
    dayBorderColor='#ffffff'
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 34,
        itemHeight: 36,
        itemDirection: 'top-to-bottom',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);
