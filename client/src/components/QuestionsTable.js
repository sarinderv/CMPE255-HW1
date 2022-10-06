import { Line } from 'react-chartjs-2';
import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
var moment = require('moment');

const QuestionsTable = (props) => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  console.log('props',props)
  var items = <TableRow key={0}/>
  if (props.questions) {
    items = props.questions.map((item) => {
      return (
        <TableRow key={item.id}>
          <TableRowColumn>
            <FlatButton 
              label={item.title} 
              labelStyle={{textTransform: 'inherit'}}
              href={item.url} 
              target = "_blank"
            />
          </TableRowColumn>
          {/* <TableRowColumn>{item.creation_date ? moment(item.creation_date.value).format("MMM Do YY") : ''}</TableRowColumn> */}
          <TableRowColumn>{item.year}</TableRowColumn>
          <TableRowColumn>{item.state}</TableRowColumn>
          <TableRowColumn>{item.corr}</TableRowColumn>
        </TableRow>
      )
    })
  }
  
  return (
  //   <Table>
  //   <TableHeader
  //   displaySelectAll = {false}
  //   adjustForCheckbox = {false}
  //   >
  //     <TableRow>
  //       <TableHeaderColumn>Title</TableHeaderColumn>
  //       <TableHeaderColumn>Year</TableHeaderColumn>
  //       <TableHeaderColumn>State</TableHeaderColumn>
  //       <TableHeaderColumn>Correlation</TableHeaderColumn>
  //     </TableRow>
  //   </TableHeader>
  //   <TableBody
  //   displayRowCheckbox = {false}
  //   >
  //     {items}
  //   </TableBody>
  // </Table>
    <Line data={data} />
  )
}

export default QuestionsTable;