const position = { x: 0, y: 0 };

const DATA = [
  {
    id: '1',
    data: { outputLabel: 'Weight status' },
    type: 'regression',
  },
  {
    id: '2',
    data: { inputLabel: 'Overweight', outputLabel: 'Smoking status' },
    type: 'regression',
  },
  {
    id: '3',
    data: { inputLabel: 'Normal, Underweight', outputLabel: 'Smoking status' },
    type: 'regression',
  },
  {
    id: '4',
    data: { inputLabel: 'Light' },
    type: 'regression',
  },
  {
    id: '5',
    data: { inputLabel: 'Heavy' },
    type: 'regression',
  },
  {
    id: '6',
    data: { inputLabel: 'Light' },
    type: 'regression',
  },
  {
    id: '7',
    data: { inputLabel: 'Heavy' },
    type: 'regression',
  },
  { id: 'c1', source: '1', target: '2' },
  { id: 'c2', source: '2', target: '4' },
  { id: 'c3', source: '2', target: '5' },
  { id: 'c4', source: '1', target: '3' },
  { id: 'c5', source: '3', target: '6' },
  { id: 'c6', source: '3', target: '7' },
];

export default DATA;
