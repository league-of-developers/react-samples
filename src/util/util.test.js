import { soma } from './util';

describe('Utils', () => {
  it('Should return the right sum', () => {
    const expectValue = 6;
    const returnedValue = soma(2, 2, 2);
    expect(returnedValue).toEqual(expectValue);
  });
});
