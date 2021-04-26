import React from 'react';
import { ResponsiveWaffleHtml } from '@nivo/waffle';
import { waffleData } from './data/chartData';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <ResponsiveWaffleHtml
    data={waffleData}
    total={100}
    rows={18}
    columns={14}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    colors={{ scheme: 'set2' }}
    borderColor={{ from: 'color', gamma: [['darker', 0.3]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 10,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
);
