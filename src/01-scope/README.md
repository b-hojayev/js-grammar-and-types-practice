# Variable Scope in JavaScript

## 📌 Goal

Understand how variable scope works in JavaScript and how it differs between
`var`, `let`, and `const`.

This task focuses on **predicting behavior**, identifying common pitfalls,
and learning how to write safer, more predictable code.

---

## 📚 Concepts Covered

- Function scope vs block scope
- Hoisting behavior
- Temporal Dead Zone (TDZ)
- Scope leakage with `var`
- Best practices for variable declarations

---

## 🧪 Task Description

### 1️⃣ Analyze and Predict

Before running the code, predict the output of each `console.log`.

Example:

```js
function scopeTest() {
  console.log(a);
  var a = 10;

  if (true) {
    let b = 20;
    var c = 30;
  }

  console.log(c);
  console.log(b);
}
```

Write down your expectations and explain why each line behaves the way it does.

## 2️⃣ Run and Verify

Run the file using Node.js:

```bash
node scope.js
```

Compare the actual output with your predictions.

## 3️⃣ Refactor

- Rewrite the code using only let and const
- Eliminate scope leaks
- Ensure all variables are accessed only where they are valid

## 4️⃣ Explain

Add comments directly in the code explaining:

- why a variable is accessible or not
- how hoisting affects var
- why let and const are safer in most cases

## ✅ Expected Outcome

By the end of this task, you should be able to:

- Predict JavaScript scope behavior without running the code
- Avoid accidental global and function-scoped variables
- Confidently choose between let and const
- Explain scope-related bugs in real projects or interviews

## 📝 Notes

This exercise is intentionally minimal and framework-free.
The goal is deep understanding, not building a feature.

Mistakes and surprises are part of the learning process.
