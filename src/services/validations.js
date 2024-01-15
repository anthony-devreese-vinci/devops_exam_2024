// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    if (gamerTag.length < 8) {
        return 'Invalid - gamertag length must be at least 8 characters';
    }
    return 'Valid - gamertag is valid';
};

exports.isValid = isValid;
