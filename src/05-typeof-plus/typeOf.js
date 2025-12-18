function typeOf(value) {
  if (Number.isNaN(value)) {
    return "nan";
  }

  if (value === null) {
    return "null";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  if (typeof value === "bigint") {
    return "bigint";
  }

  return typeof value;
}

typeOf(null); // "null"
typeOf([]); // "array"
typeOf({}); // "object"
typeOf(NaN); // "nan"
typeOf(10n); // "bigint"
typeOf(10); // "number"
typeOf("hello"); // "string"
typeOf(true); // "boolean"
typeOf(undefined); // "undefined"
typeOf(() => {}); // "function"

/**
 * Lessons Learned:
 *
 * 1. The built-in `typeof` operator has known edge cases,
 *    such as returning "object" for `null`.
 *
 * 2. `NaN` must be checked explicitly using `Number.isNaN()`.
 *
 * 3. Arrays should be detected using `Array.isArray()`,
 *    not `typeof`.
 *
 * 4. A utility function should always return a predictable result.
 *
 * 5. Handling edge cases first makes the logic clearer and safer.
 *
 * 6. A well-designed utility should have a clear fallback behavior.
 */
