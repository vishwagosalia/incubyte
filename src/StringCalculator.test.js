import { add } from './StringCalculator';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('should return number for a single input', () => {
  expect(add('1')).toBe(1);
});

test('should sum two comma-separated numbers', () => {
  expect(add('1,2')).toBe(3);
});

test('should handle newline and space as delimiters', () => {
  expect(add('1\n2 3')).toBe(6);
});

test('should handle semicolon as a delimiter', () => {
  expect(add('1;2')).toBe(3);
});
