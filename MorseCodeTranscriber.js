//Project Begins


const morseCode = (string) => {

let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
let morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", " "];

for (let i = 0; i <= alph.length -1; i++) {

if (string === alph[i]) {

//return morseAlphabet[i]
console.log(morseAlphabet[i])

    
}
} 
}


morseCode("f");


//Lets compicate the cypher

const newMorseCode = string2 => {

const alph2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
const morseAlphabet2 = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", " "];
let nameString = []; 
let name = string2;

for (let i = 0; i <= alph2.length -1; i++) {

if (string2.charAt(0) === alph2[i]) {

nameString.push(morseAlphabet2[i])



}

if (string2.charAt(1) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}


if (string2.charAt(2) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(3) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(4) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(5) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(6) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(7) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(8) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(9) === alph2[i]) {

    nameString.push(morseAlphabet2[i])


}

if (string2.charAt(10) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(11) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(12) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(13) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(14) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(15) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(16) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(17) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(18) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(19) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}

if (string2.charAt(20) === alph2[i]) {

    nameString.push(morseAlphabet2[i])

}



}

console.log(string2 + ' in morse code is ' + nameString + ' and is ' + nameString.length + ' characters long')

} 


newMorseCode('Mika is cute')


//Now lets transcribe the dots and dashes into words... and forgive console logs obsession with ABC order...


const newMorseCodeAgain = string3 => {

    const alph3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    const morseAlphabet3 = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", " "];
    let nameString2 = []; 
    
    for (let i = 0; i <= alph3.length -1; i++) {
    
    if (string3.charAt(0) === alph3[i]) {
    
    nameString2.push(morseAlphabet3[i])

    }
    
    if (string3.charAt(1) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    
    if (string3.charAt(2) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(3) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(4) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(5) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(6) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(7) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(8) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(9) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    
    }
    
    if (string3.charAt(10) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(11) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(12) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(13) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(14) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(15) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(16) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(17) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(18) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(19) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }
    
    if (string3.charAt(20) === alph3[i]) {
    
        nameString2.push(morseAlphabet3[i])
    
    }

    nameString2.forEach((item, i) => { 
        
        
        if (item === '.-') {
        
        nameString2[i] = 'dot-dash' + '[a]'
    
    } 
    
    if (item === '-...') {
        
        nameString2[i] = 'dash-dot-dot-dot' + '[b]'
    
    } 

    if (item === '-.-.') {
        
        nameString2[i] = 'dash-dot-dash-dot' + '[c]'
    
    } 

    if (item === '-..') {


        nameString2[i] = 'dash-dot-dot' + '[d]'
    }

    if (item === '.') {
        
        nameString2[i] = 'dot' + '[e]'
    
    } 

    if (item === '..-.') {
        
        nameString2[i] = 'dot-dot-dash-dot' + '[f]'
    
    } 

    if (item === '--.') {
        
        nameString2[i] = 'dash-dash-dot' + '[g]'
    
    } 

    if (item === '....') {
        
        nameString2[i] = 'dot-dot-dot-dot' + '[h]'
    
    } 

    if (item === '..') {
        
        nameString2[i] = 'dot-dot' + '[i]'
    
    } 

    if (item === '.---') {
        
        nameString2[i] = 'dot-dash-dash-dash' + '[j]'
    
    } 

    if (item === '-.-') {
        
        nameString2[i] = 'dash-dot-dash' + '[k]'
    
    } 

    if (item === '.-..') {
        
        nameString2[i] = 'dot-dash-dot-dot' + '[l]'
    
    } 

    if (item === '--') {
        
        nameString2[i] = 'dash-dash' + '[m]'
    
    } 

    if (item === '-.') {
        
        nameString2[i] = 'dash-dot' + '[n]'
    
    } 

    if (item === '---') {
        
        nameString2[i] = 'dash-dash-dash' + '[o]'
    
    } 

    if (item === '.--.') {
        
        nameString2[i] = 'dot-dash-dash-dot' + '[p]'
    
    } 

    if (item === '--.-') {
        
        nameString2[i] = 'dash-dash-dot-dash' + '[q]'
    
    } 

    if (item === '.-.') {
        
        nameString2[i] = 'dot-dash-dot' + '[r]'
    
    }

    if (item === '...') {
        
        nameString2[i] = 'dot-dot-dot' + '[s]'
    
    } 

    if (item === '-') {
        
        nameString2[i] = 'dash' + '[t]'
    
    } 

    if (item === '..-') {
        
        nameString2[i] = 'dot-dot-dash' + '[u]'
    
    } 

    if (item === '...-') {
        
        nameString2[i] = 'dot-dot-dot-dash' + '[v]'
    
    } 

    if (item === '.--') {
        
        nameString2[i] = 'dot-dash-dash' + '[w]'
    
    } 

    if (item === '-..-') {
        
        nameString2[i] = 'dash-dot-dot-dash' + '[x]'
    
    } 

    if (item === '-.--') {
        
        nameString2[i] = 'dash-dot-dash-dash' + '[y]'
    
    } 

    if (item === '--..') {
        
        nameString2[i] = 'dash-dash-dot-dot' + '[z]'
    
    } 


    if (item === ' ') {
        
        nameString2[i] = ' '
    
    } 
    
}

    
    
)}
    
    console.log(string3 + ' in morse code is ' + nameString2 + ' and is ' + nameString2.length + ' characters long')

    
    }

newMorseCodeAgain('pato')


