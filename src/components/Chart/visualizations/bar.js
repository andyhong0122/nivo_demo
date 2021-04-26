import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { barData } from './data/chartData';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <ResponsiveBar
    data={barData}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy='country' // uses it as the x axis
    margin={{
      top: 10,
      right: 10,
      bottom: 40,
      left: 10
    }}
    padding={0.3}
    colorBy='id'
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor='inherit:darker(1.6)'
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor='inherit:darker(1.6)'
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
