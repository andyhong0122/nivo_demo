import React from 'react';
import Select from 'react-select';

const ChartDropdown = ({ onSelect }) => {
  const options = [
    {
      value: 'Bar',
      label: 'Bar'
    },
    {
      value: 'Heatmap',
      label: 'Heatmap'
    },
    {
      value: 'Line',
      label: 'Line'
    },
    {
      value: 'Pie',
      label: 'Pie'
    },
    {
      value: 'Waffle',
      label: 'Waffle'
    }
  ];

  const handleChange = (e) => {
    onSelect(e);
  };

  return (
    <div style={{ padding: '15px' }}>
      <Select
        placeholder='Select Option'
        options={options} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
  );
};

export default ChartDropdown;
