// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('test should return "Invalid - gamertag length must be at least 8 characters" for a gamertag having fewer than 8 characters', () => {
        const result = isValid('fewer');
        expect(result).toBe('Invalid - gamertag length must be at least 8 characters');
    });
    test('test should return "Invalid - gamertag must contain at least a special character" for a gamertag having none special characters', () => {
        const result = isValid('longenough');
        expect(result).toBe('Invalid - gamertag must contain at least a special character');
    });
    test('test should return "Invalid - gamertag must contain at least a number" for a gamertag not having numbers', () => {
        const result = isValid('special_characters');
        expect(result).toBe('Invalid - gamertag must contain at least a number');
    });
});
