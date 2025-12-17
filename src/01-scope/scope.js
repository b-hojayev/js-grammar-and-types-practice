function scopeTest() {
  console.log(a);
  // Prediction: undefined
  // Reason: The variable declaration with `var` is hoisted,
  // but its initialization is not.

  var a = 10;

  if (true) {
    let b = 20;
    var c = 30;
  }

  console.log(c);
  // Prediction: 30
  // Reason: `var` does not have block scope.
  // It is scoped to the function, not the `if` block.

  console.log(b);
  // Prediction: ReferenceError
  // Reason: `let` and `const` have block scope.
  // The variable `b` exists only inside the `if` block.
}

/**
 * Lessons Learned:
 *
 * 1. `var` declarations are hoisted to the top of their function scope,
 *    but their initializations are not.
 *
 * 2. Variables declared with `var` do not respect block scope (`if`, `for`, etc.).
 *    This can lead to unexpected behavior and bugs.
 *
 * 3. `let` and `const` are block-scoped and safer to use in modern JavaScript.
 *
 * 4. Accessing a `let` or `const` variable outside its block results
 *    in a ReferenceError.
 *
 * 5. Prefer `const` by default, and use `let` only when reassignment is needed.
 */
