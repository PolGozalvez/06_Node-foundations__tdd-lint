/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
 * - if total number of words is greater than 5, then return uppercase string
 * - otherwise, return lowercase string
 * input: string (sentence)
 * output: string
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

/**
 * Check number of words contained in given string
 * @param {string} sentence
 * @returns string
 */
export function formatStringByWordsLength(sentence) {
  if (typeof sentence !== 'string') {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  const words = sentence.split(' ');
  return words.length > 5 ? sentence.toUpperCase() : sentence.toLowerCase();
}
