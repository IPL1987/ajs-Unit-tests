import health from '../matchers';

const test = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const handler = test.each(test);

handler('sort by health', () => {
  const sort = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = health(test);
  expect(result).toEqual(sort);
});
