// // 1


// // 2
// function isBlank(str) {
//     return str.trim() === '';
// }
// console.log(isBlank(""));
// console.log(isBlank("Hello"));


// // 3
// function stringToWords(str) {
//     return str.split(' ');
// }
// console.log(stringToWords("John Doe"));


// // 4
// function extractChars(str, num) {
//     return str.slice(0, num);
// }
// console.log(extractChars("Robin", 4));



// 6
// function hideEmail(email) {
//     let [local, domain] = email.split("@");
//     return `${local.slice(0, 4)}...@${domain}`;
// }
// console.log(hideEmail("robin@example.com")); 



// // 7
// function parameterize(str) {
//     return str.toLowerCase().replace(/\s+/g, '-');
// }
// console.log(parameterize("Robin Doe From USA")); 

// // 8
// function capitalizeFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalizeFirst("js string exercises"));


// // 9
// function capitalizeEachWord(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeEachWord("js string exercises"));

// 10
// function swapCase(str) {
//     return str.split('').map(char => 
//         char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     ).join('');
// }
// console.log(swapCase("aAbBC"));
