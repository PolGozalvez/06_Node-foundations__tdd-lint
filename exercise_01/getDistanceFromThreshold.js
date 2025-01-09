/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

/**
 * Find how much a number exceeds or is left to reach one value
 * @param {number} value 
 * @param {number} threshold 
 * @returns number
 */
export function getDistanceFromThreshold(value, threshold) {
    if (typeof value !== "number" || typeof threshold !== "number") {
        throw new TypeError(
            `expected number but received ${typeof value} and ${typeof threshold}`
        );
    }
    return (threshold - value);
}
