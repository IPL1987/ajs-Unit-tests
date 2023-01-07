import health from '../matchers';

const testing = [
  { name: 'мечник', health: 15 },
  { name: 'маг', health: 60 },
  { name: 'лучник', health: 45 },
];

const handler = test.each(testing);

handler('sort by health', () => {
  const sorted = [
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 45 },
    { name: 'мечник', health: 15 },
  ];

  const result = health(testing);
  expect(result).toEqual(sorted);
});
