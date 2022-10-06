import { Line } from 'react-chartjs-2';
import React from 'react';

const NatalityGraph = (props) => {

  var items = [], labels = [];

  // convert [{corr: y1, year: n, state: s1}, {corr: y2, year: n, state: s2}, ...]
  //      to [{x: 1, y: y1}, {x: 2, y: y2}, ... ]
  // for 50 states over 3 years
  console.log('props',props)
  if (props.data) {
    for (var i = 0; i < 50; i++) {
      var q = props.data[i]
      if (q && q.corr) {
        items.push({x: i, y: q.corr})
        labels.push(q.state);
      }
    }
  }

  const data = {
    labels: labels,
    datasets: [{
      label: 'Natality dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      showLine: false,
      data: items,
    }]
  };

  return (
    <Line data={data} />
  )
}

export default NatalityGraph;