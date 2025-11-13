/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof (n) !== "number") {
    return NaN;
  }
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 1;
  } else {
    let totalProduct = 1;
    for (let i = 1; i <= n; i++) {
      totalProduct *= i;
    }
    return totalProduct;
  }
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof (n) !== "number") {
    return null;
  }
  if (n <= 0) {
    return [];
  } else {
    const builtArray = [];
    for (let i = 1; i <= n; i++) {
      builtArray.push(i);
    }
    return builtArray;
  }
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  const longestString = strings.reduce((currentLong, currentStr) => {
    if (currentStr.length > currentLong.length) {
      currentLong = currentStr;
    }
    return currentLong;
  }, "");

  return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if (attendance.length === 0) {
    return 0;
  }
  const numPresent = attendance.reduce((currentPresent, currentStu) => {
    if (currentStu) {
      currentPresent++;
    }
    return currentPresent;
  }, 0);
  return numPresent;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof (dna) !== "string") {
    return null;
  }
  let complement = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        complement += 'T';
        break;
      case 'T':
        complement += 'A';
        break;
      case 'G':
        complement += 'C'
        break;
    
      default:
        complement += 'G'
        break;
    }
  }
  
  return complement;
}
