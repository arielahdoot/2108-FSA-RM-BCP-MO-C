/* Notes
* take string as input 
* count number of vowels in string
* return count
* vowels include y? yes
* empty string valid ? yes
* accepts uppercase chars? yes 
*/

/* examples

countVowels("");// 0
countVowels("abcd"); // 1
countVowels("abcdy"); // 2
countVowels("AbCdy"); // 2

*/

/* APPROACH
* create a variable vowels = "aeiouy" 
* create a variable count that will be the result
* loop over string
* get each char 
    * check if char is a vowel
        * check if char exists in vowels string  
            * if yes, increment count by 1
            * if no, skip incrementing count 
* return count
 */

// SOLUTION 

function countVowels (str) {
    str = str.toLowerCase();
    let vowels = "aeiouy";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.includes(char)) {
            count++; // count += 1 || count = count + 1
        } else {
            continue; // or do count += 0 if don't want to use continue
        }
    }
    return count;
}

// TEST 

console.log(countVowels(""));// 0
console.log(countVowels("abcd")); // 1
console.log(countVowels("abcdy")); // 2
console.log(countVowels("AbCdy")); // 2

