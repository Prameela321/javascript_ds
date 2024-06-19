const s1  = "abc" , s2 = "cba";
let s1_count = Array(256).fill(0);

const s2_count = Array(256).fill(0);

if(s1.length !== s2.length){
    console.log("Not an anagram");return;
}
for(let i=0;i<s1.length;i++){
    s1_count[s1.charCodeAt(i)]++;
    s2_count[s2.charCodeAt(i)]++;
}

const uniqueArray =  [...new Set(s1)].join('');
// console.log(uniqueArray);
for(let i=0;i<uniqueArray.length;i++){
//   console.log(uniqueArray[i] ,"char  count in s1 ",s1_count[uniqueArray.charCodeAt(i)], " count in s2 ",s2_count[uniqueArray.charCodeAt(i)]);
  if(s1_count[uniqueArray.charCodeAt(i)] != s2_count[uniqueArray.charCodeAt(i)]){
    console.log("Strings are not Anagram");return;
  }
}

console.log("strings are anagram");
//  consol

