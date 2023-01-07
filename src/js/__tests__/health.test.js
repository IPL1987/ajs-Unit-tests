import health from '../health';

const healthObj = [
  [{ name: 'Маг', health: 60 }, 'healthy'],
  [{ name: 'Лучник', health: 35 }, 'wounded'],
  [{ name: 'Мечник', health: 15 }, 'critical'],
];

const handler = test.each(healthObj);

handler('health level for %Unit', (person, expected) => {
  const result = health(person);
  expect(result).toBe(expected);
});
