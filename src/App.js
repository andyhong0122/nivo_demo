import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './styles/app.css';

//components
import ChartDropdown from './components/Chart/chartDropdown';
import SelectedChart from './components/Chart/selectedChart';
import ChartDataObject from './components/Chart/chartDataObject';

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive);
// Determines the screen breakpoints for the columns
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 };
// How many columns are available at each breakpoint
const cols = { lg: 8, md: 4, sm: 1, xs: 1, xxs: 1 };

function App() {
  const [selectedChart, setSelectedChart] = React.useState(null);

  const onSelectChart = (chartType) => {
    console.log(`User selected ${chartType.label} from dropdown`);
    setSelectedChart(chartType.label);
  };

  return (
    <div className='App'>
      <div className='nav-bar'>
        <h1 className='header'>Sample Dashboard with Nivo</h1>
      </div>

      <ResponsiveGridLayout className='my-5 mx-8' breakpoints={breakpoints} cols={cols}>
        <div className='grid-cell' key='1' data-grid={{ x: 0, y: 0, w: 5, h: 5, static: true }}>
          <SelectedChart selectedChart={selectedChart} />
        </div>

        <div
          className='grid-cell'
          key='2'
          data-grid={{ x: 5, y: 0, w: 2, h: 5, static: true }}
          style={{ overflow: 'auto' }}
        >
          <h3 className='grid-header'> Chart Data Object </h3>
          <ChartDataObject selectedChart={selectedChart} />
        </div>

        <div className='grid-cell' key='3' data-grid={{ x: 7, y: 0, w: 1, h: 5, static: true }}>
          <h3 className='grid-header'> Select Chart Type </h3>
          <ChartDropdown onSelect={onSelectChart} />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;
