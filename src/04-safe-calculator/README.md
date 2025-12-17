# Safe Sum – Explicit Type Handling in JavaScript

## 📌 Goal

Implement a safe and predictable addition function that explicitly handles
different JavaScript data types without relying on implicit type coercion.

This task focuses on **defensive programming**, **explicit conversions**, and
understanding how JavaScript treats different values in arithmetic operations.

---

## 📚 Concepts Covered

- Explicit vs implicit type conversion
- Defensive programming
- Handling `null`, `undefined`, and invalid input
- Boolean and string normalization
- Avoiding falsy value pitfalls
- Writing predictable, maintainable functions

---

## 🧪 Task Description

### 1️⃣ Function Behavior

Implement a function:

```js
safeSum(a, b);
```

The function must:

- Return the numeric sum of valid inputs
- Explicitly normalize supported types
- Throw an error for unsupported or unsafe input

### 2️⃣ Supported Input Rules

| Type        | Behavior                   |
| ----------- | -------------------------- |
| `number`    | Used directly              |
| `string`    | Converted using `Number()` |
| `boolean`   | `true → 1`, `false → 0`    |
| `null`      | Treated as `0`             |
| `array`     | Treated as `0`             |
| `undefined` | Throws an error            |
| other types | Throws an error            |

### 3️⃣ Example Usage

```js
safeSum(1, "2"); // 3
safeSum(null, 3); // 3
safeSum(true, false); // 1
safeSum([], []); // 0
safeSum(undefined, 3); // Error
safeSum("abc", 2); // Error
```

### ✅ Expected Outcome

By completing this task, you should be able to:

- Avoid accidental JavaScript type coercion
- Safely handle mixed-type input
- Write predictable and debuggable utility functions
- Recognize and prevent common arithmetic bugs in real applications

### 📝 Notes

This exercise intentionally avoids relying on JavaScript’s implicit coercion rules.
Instead, it enforces explicit behavior to improve code clarity and reliability.

This pattern is especially useful in user input handling, financial calculations,
and API data normalization.
