import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Chart from '../lib';
import 'c3/c3.css';

const data = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ]
}

storiesOf('Button', module)
  .add('default', () => (
    <Chart data={data} />
  ))
