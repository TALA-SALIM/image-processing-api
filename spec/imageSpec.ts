import resizeImage from '../src/services/resizeImage';

describe('Resize Function Unit Test', () => {

  it('should resize image successfully', async () => {
    const result = await resizeImage('fjord', 200, 200);
    expect(result).toContain('fjord_200_200.jpg');
  });

  it('should throw error for invalid image', async () => {
    await expectAsync(
      resizeImage('invalidName', 200, 200)
    ).toBeRejected();
  });

});