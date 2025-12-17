const tests = [
  "5" + 1,
  // Result: "51"
  // Type: string
  // Reason: The `+` operator performs string concatenation when one operand is a string.
  // The number `1` is implicitly converted to a string.

  "5" - 1,
  // Result: 4
  // Type: number
  // Reason: The `-` operator is numeric-only.
  // The string "5" is converted to a number before the operation.

  null + 1,
  // Result: 1
  // Type: number
  // Reason: `null` is converted to 0 in numeric operations.

  undefined + 1,
  // Result: NaN
  // Type: number
  // Reason: `undefined` cannot be converted to a valid number,
  // so the result of the operation is NaN.

  [] + [],
  // Result: ""
  // Type: string
  // Reason: Both arrays are converted to strings.
  // [].toString() results in an empty string, so "" + "" produces "".

  [] + {},
  // Result: "[object Object]"
  // Type: string
  // Reason: The array is converted to an empty string (""),
  // the object is converted to "[object Object]",
  // and the `+` operator performs string concatenation.

  {} + [],
  // Result: 0   (when evaluated as an expression in JavaScript)
  // Type: number
  // Reason: {} is interpreted as an empty block, not an object literal.
  // The expression becomes +[], and [] is converted to 0.

  {} + [], // "[object Object]" (expression context)

  true + false,
  // Result: 1
  // Type: number
  // Reason: true is converted to 1, false is converted to 0
  // during numeric addition.
];

/**
 * Lessons Learned:
 *
 * 1. The `+` operator performs string concatenation if either operand is a string.
 *
 * 2. Arithmetic operators like `-`, `*`, and `/` always force numeric conversion.
 *
 * 3. `null` is converted to 0 in numeric operations.
 *
 * 4. `undefined` converts to NaN in numeric contexts.
 *
 * 5. Arrays are converted to strings using `.toString()`,
 *    which can lead to unexpected results.
 *
 * 6. Objects are converted to "[object Object]" when coerced to strings.
 *
 * 7. Boolean values are converted to numbers in arithmetic operations:
 *    true → 1, false → 0.
 *
 * 8. Expression context matters: the same code can produce different results
 *    depending on how JavaScript parses it.
 */
