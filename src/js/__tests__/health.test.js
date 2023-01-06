import health from '../health';

const checkObj = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 45 }, 'wounded'],
  [{ name: 'Мечник', health: 12 }, 'critical'],
];

const handler = test.each(checkObj);

handler('health level for %Unit', (person, expected) => {
  const result = health(person);
  expect(result).toBe(expected);
});
