import notifyTest from '../notifyTest';

describe('hello', () => {
  it('executes as expected', async () => {
    const response = await notifyTest({});
    expect(response).toMatchSnapshot();
  });

  it('executes as expected include params', async () => {
    const event = {
      queryStringParameters: {
        test: 'example'
      }
    }
    const response = await notifyTest(event);
    expect(response).toMatchSnapshot();
  });
});
