/*

Given two strings s and t , write a function to determine if t is an anagram of s.
You may assume the string contains only lowercase alphabets.

Followup 
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Poor force brute or 
// using fixed arrays  complexity => O (n) but wont work with unicode as the 26 array is fixed --> not so fast in ms
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let counter = Array(26).fill(0) ; // length of the array is 26 for the abecedary 
    for (let i = 0; i < s.length; i++) {
        // console.log(s.charCodeAt(i) - 'a'.charCodeAt(0));
        counter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // sum in each of the letters
        counter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; // rest in each to return to 0 if equals
    }
    // check the array
    for (let i = 0; i < 26; i++) {
        let count = counter[i];
        if (count !== 0) { // not the same quantity, return false
            return false;
        }
    }
    return true;
}


// using and sorting arrays

/**
 *  Complexity O(n log n) --> sorting O( log n ), comparing O(n)
 */
function isAnagram (s, t) {
    let anagram = true;
    if ( s.length !== t.length ) {
        return false;
    }
    else {
        let sCharArray = [...s];
        let tCharArray = [...t];
        sCharArray.sort();
        tCharArray.sort();
        for (let i = 0 ; i < sCharArray.length ; i++ ) {
            if ( sCharArray[i] !== tCharArray[i] ) {
                anagram = false;
                break;
            }
        }
    }
    return anagram;
};

// using hashmaps for unicode and any symbol complesty O(n) +++ faster
function isAnagram( s, t) {
    let charMap     = new Map();
    let slength     = s.length;
    let tlength     = t.length;
    if( slength !== tlength) {
        return false;
    }
    for( let i=0 ; i < slength ; i++){
        charMap.set(s.charAt(i), (charMap.get(s[i]) || 0) +1);
        charMap.set(t.charAt(i), (charMap.get(t[i]) || 0) -1);
    }
    let isAnagram = true;
    charMap.forEach((countOfChar) => {
        if ( countOfChar !== 0 ) {
            isAnagram = false;
            return;
        }
    });
    return isAnagram;
}