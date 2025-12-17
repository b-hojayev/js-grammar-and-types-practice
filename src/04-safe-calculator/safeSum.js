function safeSum(a, b) {
  if (typeof a === "undefined" || typeof b === "undefined") {
    throw new Error("Arguments must not be undefined");
  }

  const normalize = (value) => {
    if (typeof value === "number") {
      return value;
    }

    if (typeof value === "string") {
      const num = Number(value);
      if (Number.isNaN(num)) {
        throw new Error("Invalid numeric string");
      }
      return num;
    }

    if (typeof value === "boolean") {
      return value ? 1 : 0;
    }

    if (value === null) {
      return 0;
    }

    if (Array.isArray(value)) {
      return 0;
    }

    throw new Error("Unsupported type");
  };

  const x = normalize(a);
  const y = normalize(b);

  return x + y;
}

safeSum(1, "2"); // 3
safeSum(null, 3); // 3
safeSum(true, false); // 1
safeSum([], []); // 0
safeSum(undefined, 3); // Error
safeSum("abc", 2); // Error

/**
 * Lessons Learned:
 *
 * 1. Relying on implicit type coercion can hide bugs and produce accidental behavior.
 *
 * 2. Falsy checks (`if (!value)`) are dangerous when `0`, `false`, or `NaN`
 *    are valid inputs.
 *
 * 3. Explicit type normalization makes code safer and more predictable.
 *
 * 4. `null` should be handled intentionally, not relied on for implicit conversion.
 *
 * 5. `Number.isNaN()` should be used instead of `isNaN()` for reliable checks.
 *
 * 6. Defensive programming improves function reliability and debuggability.
 */
