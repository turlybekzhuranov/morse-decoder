const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let morseCodes = expr.match(/.{1,2}/g);
    let morseCode = '';

    for (let i=0; i<morseCodes.length; i++){
        
        if (i%5 === 0 && i !== 0 && morseCodes[i-1] != '**'){
            morseCode += ' ';
        }
        if (morseCodes[i] == '10') {
            morseCode += '.';
        }
        else if (morseCodes[i] == '11') {
            morseCode += '-';
        }
        else if (morseCodes[i] == '**'){
            morseCode += '*';
        }
    }

    let words = (morseCode).split('*****');
    let letters = words.map((w) => w.split(' '));
    let decoded = [];

    for(let i = 0; i < letters.length; i++){
        decoded[i] = [];
        for(let x = 0; x < letters[i].length; x++){
            if(MORSE_TABLE[letters[i][x]]){
                decoded[i].push( MORSE_TABLE[letters[i][x]] );
            }
        }
    }

    return decoded.map(arr => arr.join('')).join(' ');
}

module.exports = {
    decode
}