import health from '../matchers';

const testing = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const handler = test.each(testing);

handler('sort by health', () => {
  const sorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = health(testing);
  expect(result).toEqual(sorted);
});
