import { TakePipe } from './take.pipe';

describe('TakePipe', () => {
  const array = [1, 2, 3, 4, 5, 6]
  it('create an instance', () => {
    const pipe = new TakePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform length to 1', () => {
    const pipe = new TakePipe();
    let newArray = pipe.transform(array, [1]);
    expect(newArray.length).toEqual(1);
  });

  it('should return all items when take comes bigger (9 -> 6)', () => {
    const pipe = new TakePipe();
    let newArray = pipe.transform(array, [9]);
    expect(newArray.length).toEqual(6);
  });

});
