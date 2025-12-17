# Type Coercion in JavaScript

## 📌 Goal

Understand how JavaScript implicitly converts values between different types
during operations and comparisons.

This task focuses on recognizing **implicit type coercion**, predicting results,
and explaining the conversion steps that JavaScript performs under the hood.

---

## 📚 Concepts Covered

- Implicit vs explicit type conversion
- String and number operations
- Boolean coercion
- Behavior of `null`, `undefined`, and `NaN`
- Array and object coercion
- The `+` operator vs other arithmetic operators

---

## 🧪 Task Description

### 1️⃣ Predict Before Running

For each expression in the file, write a prediction of:

- the resulting value
- the resulting type

Example:

```js
"5" + 1;
```

Explain why JavaScript produces that result.

### 2️⃣ Run and Observe

Run the file using Node.js:

```bash
node coercion.js
```

Compare the actual output with your predictions.

### 3️⃣ Explain the Coercion Steps

Add comments explaining:

- which operand is converted
- which type JavaScript prefers
- why the final result has its specific type

Focus on step-by-step reasoning, not 4️⃣ Identify Patterns

### 4️⃣ Identify Patterns

After completing the task, summarize the rules you observe, such as:

- when JavaScript prefers strings
- when values are converted to numbers
- how falsy values behave in expressions

### ✅ Expected Outcome

By the end of this task, you should be able to:

- Predict the result of common coercion cases without running the code
- Avoid bugs caused by implicit conversions
- Know when to use explicit conversion (Number(), String(), Boolean())
- Confidently explain coercion behavior in code reviews and interviews

### 📝 Notes

Type coercion is one of the most common sources of subtle JavaScript bugs.
This exercise is designed to build intuition, not memorization.

Understanding coercion deeply makes your code safer and more predictable.
