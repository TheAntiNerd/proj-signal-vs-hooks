function generateRandomString(length) {
    // Define all possible characters that can be included in the string
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var charactersLength = characters.length;
    
    // Loop for the number of times equal to the length required
    for (var i = 0; i < length; i++) {
        // Pick a random character from the characters string and append it to the result
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

export default generateRandomString;