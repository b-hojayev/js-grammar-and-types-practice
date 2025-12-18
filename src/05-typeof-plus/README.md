# Enhanced `typeOf` Utility

## 📌 Goal

Create a reliable `typeOf` utility function that improves upon JavaScript’s
built-in `typeof` operator by correctly identifying common edge cases.

This task focuses on understanding **JavaScript type detection limitations**
and implementing a safer, more predictable alternative.

---

## 📚 Concepts Covered

- JavaScript primitive types
- Limitations of the `typeof` operator
- Detecting `null`, `NaN`, and arrays
- Handling `bigint`
- Writing robust utility functions

---

## 🧪 Task Description

### 1️⃣ Problem Statement

JavaScript’s built-in `typeof` operator has known inconsistencies:

```js
typeof null; // "object"
typeof []; // "object"
typeof NaN; // "number"
```

These results are often misleading in real-world applications.

### 2️⃣ Task

Implement a function:

```js
typeOf(value);
```

The function should return a clear and accurate string representation
of the value’s type.

### 3️⃣ Expected Behavior

```js
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
```

### ✅ Expected Outcome

By completing this task, you should be able to:

- Explain why typeof behaves inconsistently for certain values
- Correctly detect edge cases like null, NaN, and arrays
- Write utility functions with predictable return values
- Improve code safety when performing type checks

### 📝 Notes

This utility is intentionally minimal and does not attempt to detect
complex structures such as Date, Map, or Set.

The goal is to understand JavaScript’s type system and its pitfalls,
not to replace full-featured libraries.
