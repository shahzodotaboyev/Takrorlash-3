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

// 11 ( ishalap bilmadm)

// 12
// function uncamelize(str, separator = " ") {
//     if (!str) return "";
//     return str
//         .replace(/([a-z])([A-Z])/g, `$1${separator}$2`)
//         .toLowerCase();
// }

// console.log(uncamelize("helloWorld", " "));
// console.log(uncamelize("helloWorld", "-"));
// console.log(uncamelize("helloWorld", "_"));

// 13
// function repeatStr(str, n = 1) {
//   return str.repeat(n);
// }

// console.log(repeatStr("Ha!", 3));


// 16
// function truncateString(str, maxLength, end = "...") {
//     if (str.length <= maxLength) return str; 
//     return str.slice(0, maxLength) + end;
// }
// console.log(truncateString("We are doing JS string exercises.", 30));


// 19

// function padString(str, length, char = " ", direction = "right") {
//     if (str.length >= length) return str;
//     const padding = char.repeat(length - str.length); 
//     return direction === "left" ? padding + str : str + padding;
// }

// console.log(padString("Hello", 10, "_", "right"));
// console.log(padString("Hello", 10, "_", "left")); 



// 20
// function repeatString(str, times) {
//     if (times <= 0) return ""; 
//     return str.repeat(times); 
// }

// console.log(repeatString("Ha!", 3));
// console.log(repeatString("Hello", 5));
// console.log(repeatString("Hi", 0));   



