// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('test should return false for a gamertag having fewer than 8 characters', () => {
        const result = isValid('fewer');
        expect(result).toBe('Invalid - gamertag length must be at least 8 characters');
    });
});
