import { counterReducer } from './counter.reducer';
import { increment, decrement, reset, set } from './counter.actions';

describe('Counter reducer', () => {
  const sampleState = { value: 3 };

  it('should increment the value', () => {
    const result = counterReducer(sampleState, increment());
    expect(result).toEqual({ value: 4 });
  });

  it('should decrement the value', () => {
    const result = counterReducer(sampleState, decrement());
    expect(result).toEqual({ value: 2 });
  });

  it('should reset the value', () => {
    const result = counterReducer(sampleState, reset());
    expect(result).toEqual({ value: 0 });
  });

  it('should set a new value', () => {
    const result = counterReducer(sampleState, set({ n: 9 }));
    expect(result).toEqual({ value: 9 });
  });
});
