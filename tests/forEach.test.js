const forEach = require('../forEach.js')

const mockCallback = jest.fn(x => 42 + x);
    
forEach([0, 1], mockCallback);

it ('expect forEach function to be called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
})

it ('expect first value to be 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
})

it ('expect first value to be 43', () => {
    expect(mockCallback.mock.results[1].value).toBe(43);
})

