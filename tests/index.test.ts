import { add } from '../src/index';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
