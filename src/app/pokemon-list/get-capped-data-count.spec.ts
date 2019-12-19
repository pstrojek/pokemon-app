import { getCappedDataCount } from './pokemon-list.component';

describe('getCappedDataCount', () => {
  it('should return capped value for bigger dataCount', () => {
    expect(getCappedDataCount(400, 10, 10)).toBe(100);
  });

  it('should not return dataCount value for bigger dataCount', () => {
    expect(getCappedDataCount(400, 10, 10)).not.toBe(400);
  });

  it('should return dataCount for bigger capped value', () => {
    expect(getCappedDataCount(50, 10, 10)).toBe(50);
  });

  it('should return zero for zero count', () => {
    expect(getCappedDataCount(0, 10, 10)).toBe(0);
  });
});
