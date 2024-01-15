// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    if (gamerTag.length < 8) {
        return 'Invalid - gamertag length must be at least 8 characters';
    }

    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    if(!specialCharacters.some(char => gamerTag.includes(char))) {
        return 'Invalid - gamertag must contain at least a special character';
    }
    
    return 'Valid - gamertag is valid';
};

exports.isValid = isValid;
