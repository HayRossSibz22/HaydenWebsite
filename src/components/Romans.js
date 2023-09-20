const { parse } = require("dotenv");

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    let roman = 0;
    let romanMap = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);

    for (let i = 0; i < s.length; i++) {
        if (romanMap.get(s[i]) < romanMap.get(s[i + 1])) {
            roman -= romanMap.get(s[i]);
        } else {
            roman += romanMap.get(s[i]);
        }
    }


    return roman;
};

//function to transform integer into roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = '';
    let romanMap = new Map();
    romanMap.set(1, 'I');
    romanMap.set(4, 'IV');
    romanMap.set(5, 'V');
    romanMap.set(9, 'IX');
    romanMap.set(10, 'X');
    romanMap.set(40, 'XL');
    romanMap.set(50, 'L');
    romanMap.set(90, 'XC');
    romanMap.set(100, 'C');
    romanMap.set(400, 'CD');
    romanMap.set(500, 'D');
    romanMap.set(900, 'CM');
    romanMap.set(1000, 'M');

    let romanKeys = Array.from(romanMap.keys()).reverse();
    for (let i = 0; i < romanKeys.length; i++) {
        while (num >= romanKeys[i]) {
            roman += romanMap.get(romanKeys[i]);
            num -= romanKeys[i];
        }
    }

    return roman;  
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  parse = s.trim().split(" ");
  return parse[parse.length - 1].length;  
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  hashmap = new Map();
    for (let i = 0; i < magazine.length; i++) {
        if (hashmap.has(magazine[i])) {
            hashmap.set(magazine[i], hashmap.get(magazine[i]) + 1);
        } else {
            hashmap.set(magazine[i], 1);
        }
    }
    for(let i = 0; i < ransomNote.length; i++) {
        if (hashmap.has(ransomNote[i]) && hashmap.get(ransomNote[i]) > 0) {
            hashmap.set(ransomNote[i], hashmap.get(ransomNote[i]) - 1);
        } else {
            return false;
        }
    }
    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (t.indexOf(s[i]) === -1) {
            return false;
        }
        t = t.replace(s[i], '');
    }
    return t.length === 0;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k; j++) {
      if (nums[i] === nums[i + j]) {
        return true;
      }
    }
  }  
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = new Map();
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        if (hashmap.has(sorted)) {
            hashmap.get(sorted).push(strs[i]);
        } else {
            hashmap.set(sorted, [strs[i]]);
        }
    }
    let strings = [];
    for (let value of hashmap.values()) {
        strings.push(value);
    }
    
     return strings
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
};

class MyClass {
    constructor() {
      this.map = new Map();
      this.map.set('foo', 1);
      this.map.set('bar', 3);
    }
  
    static getValue(input, numRetries) {
      try {
        const value = this.map.get(input);
        if (value === undefined) {
          throw new Error(`Key ${input} not found`);
        }
        return value;
      } catch (e) {
        if (numRetries > 3) {
          throw e;
        }
        return this.getValue(input, numRetries + 1);
      }
    }
  }
  
  const myClassInstance = new MyClass();
  console.log("1. " + MyClass.getValue.call(myClassInstance, 'foo', 0));