//Q.1  SET METHOD:
    // You are given a string (STR) of length N, consisting of only the lower case English alphabet.
    // Your task is to remove all the duplicate occurrences of characters in the string.
    // Input:
    // abcadeecfb
    // Output:
    // abcdef"

function DuplicateChar(str,N){
    const set = new Set(str);
    console.log([...set])
}
DuplicateChar('abcadeecfb',10);

//Q.2 MAP METHOD:
    // You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
    // Input:
    // abcadeecfb
    // Output:
    // a=2
    // b=2
    // c=2
    // d=1
    // e=2
    // f=1

function charCount (string) {
    let mp = new Map();
    let count = 0;
        for (const char of string) {
        mp.set(char,count);     
        }
        
        for (const char of string) {
        count = mp.get(char);
        mp.set(char, count + 1);
        }

        for (const [char,value] of mp) {
        console.log(char + '=' + value);
        }
    } 
    charCount('abcadeecfb');
       
