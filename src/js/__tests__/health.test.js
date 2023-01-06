import health from '../health';

test('should healthy', () => {
  const received = health({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('should wounded', () => {
  const received = health({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('should critical', () => {
  const received = health({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});

test('Parameter is not a number!', () => {
  expect(() => {
    health({});
  }).toThrow();
});

test('Parameter is not a number!', () => {
  expect(() => {
    health({ name: 'Маг', health: 'mistake' });
  }).toThrow();
});

test('Parameter is not a number!', () => {
  expect(() => {
    health({ name: 'Маг', health: -10 });
  }).toThrow();
});
