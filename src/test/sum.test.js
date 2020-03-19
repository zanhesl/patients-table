import getInfo from '../js/api/getInfo';

test('adds 1 + 2 to equal 3', () => {
  // expect.assertions(1);
  return getInfo().then(data => {
    expect(data[0].historyNumber).toBe(1);
  });
});
