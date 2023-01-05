import showHealth from '../health';

test('should healthy', () => {
  const received = showHealth({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('should wounded', () => {
  const received = showHealth({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('should critical', () => {
  const received = showHealth({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});

test('Parameter is not a number!', () => {
  expect(() => {
    showHealth({});
  }).toThrow();
});

test('Parameter is not a number!', () => {
  expect(() => {
    showHealth({ name: 'Маг', health: 'mistake' });
  }).toThrow();
});

test('Parameter is not a number!', () => {
  expect(() => {
    showHealth({ name: 'Маг', health: -10 });
  }).toThrow();
});
