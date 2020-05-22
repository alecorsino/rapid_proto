// const sum = (a, b) => a + b;
import { sum } from '../app/api.ts'

test('adds 1 + 2 to equal string 3', () => {
    expect(sum(1, 2)).toBe('3');
});